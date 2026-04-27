import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Star, MessageSquare, User, Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '../lib/utils';
import { Review } from '../types';

const reviewSchema = z.object({
  userName: z.string().min(2, 'Имя слишком короткое'),
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, 'Отзыв должен быть не менее 10 символов'),
});

type ReviewForm = z.infer<typeof reviewSchema>;

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<ReviewForm>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { rating: 5 }
  });

  const ratingValue = watch('rating');

  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[];
      setReviews(data);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const onSubmit = async (data: ReviewForm) => {
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'reviews'), {
        ...data,
        createdAt: serverTimestamp(),
      });
      reset();
      setShowForm(false);
    } catch (error) {
      console.error('Error adding review:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      <section className="bg-[#141414] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[1px] w-12 bg-orange-500" />
                <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">Мнение клиентов</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">ОТЗЫВЫ О <span className="text-orange-500 italic">РАБОТЕ</span></h1>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-orange-500 text-black px-8 py-4 rounded-sm font-bold flex items-center gap-2 hover:bg-orange-600 transition-all uppercase tracking-widest text-xs"
            >
              {showForm ? 'Закрыть форму' : 'Оставить отзыв'}
              <MessageSquare size={18} />
            </button>
          </div>

          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-20"
              >
                <div className="bg-[#1c1c1c] border border-orange-500/30 p-8 md:p-12 max-w-2xl">
                  <h3 className="text-2xl font-bold mb-8">Ваш отзыв важен для нас</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Ваше имя</label>
                      <input
                        {...register('userName')}
                        className="w-full bg-[#141414] border border-gray-800 p-4 text-white focus:border-orange-500 outline-none transition-all rounded-sm"
                        placeholder="Алексей Маслов"
                      />
                      {errors.userName && <p className="text-red-500 text-xs mt-1">{errors.userName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Оценка</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setValue('rating', star)}
                            className={cn(
                              "transition-all",
                              star <= ratingValue ? "text-orange-500" : "text-gray-700"
                            )}
                          >
                            <Star size={32} fill={star <= ratingValue ? "currentColor" : "none"} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Ваш комментарий</label>
                      <textarea
                        {...register('comment')}
                        rows={4}
                        className="w-full bg-[#141414] border border-gray-800 p-4 text-white focus:border-orange-500 outline-none transition-all rounded-sm resize-none"
                        placeholder="Поделитесь вашими впечатлениями от работы с нами..."
                      />
                      {errors.comment && <p className="text-red-500 text-xs mt-1">{errors.comment.message}</p>}
                    </div>

                    <button
                      disabled={submitting}
                      className="w-full bg-orange-500 text-black py-4 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-orange-600 transition-all disabled:opacity-50"
                    >
                      {submitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                      Отправить отзыв
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-orange-500" size={48} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, i) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={review.id || i}
                  className="bg-[#1c1c1c] p-10 border border-gray-800 hover:border-gray-700 transition-all flex flex-col h-full"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? "text-orange-500" : "text-gray-800"}
                        fill={i < review.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 italic mb-10 leading-relaxed flex-grow">
                    "{review.comment}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 border border-orange-500/20">
                      <User size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase text-sm mb-1">{review.userName}</h4>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest">Клиент</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
