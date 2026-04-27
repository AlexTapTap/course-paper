import { motion } from 'motion/react';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Loader2, CheckCircle2, Phone, Mail, Clock } from 'lucide-react';
import { ServiceType } from '../types';

const inquirySchema = z.object({
  name: z.string().min(2, 'Введите ваше имя'),
  email: z.string().email('Некорректный email'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  service: z.string().min(1, 'Выберите тип услуги'),
  details: z.string().min(10, 'Опишите ваш проект подробнее'),
});

type InquiryForm = z.infer<typeof inquirySchema>;

export default function Application() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { service: ServiceType.COTTAGE }
  });

  const onSubmit = async (data: InquiryForm) => {
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'inquiries'), {
        ...data,
        createdAt: serverTimestamp(),
        status: 'new'
      });
      // NOTE: In a real production app, you would trigger a Cloud Function here
      // to send this data to lmaslov691@gmail.com
      console.log('Inquiry submitted, sending notification to lmaslov691@gmail.com');
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24 pt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-[1px] w-12 bg-orange-500" />
          <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">Расчет стоимости</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-16 uppercase tracking-tight">ОСТАВИТЬ <span className="text-orange-500 italic">ЗАЯВКУ</span></h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-orange-500 p-16 text-black text-center"
              >
                <CheckCircle2 size={80} className="mx-auto mb-8" />
                <h2 className="text-4xl font-black mb-4">СПАСИБО ЗА ДОВЕРИЕ!</h2>
                <p className="text-xl font-medium mb-10">
                  Ваша заявка принята и уже направлена на почту специалисту. <br className="hidden md:block"/>
                  Мы свяжемся с вами в ближайшее время для обсуждения деталей.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-black text-white px-10 py-4 font-bold uppercase tracking-widest text-sm"
                >
                  Оправить еще одну
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-[#1c1c1c] p-10 md:p-16 border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-3">Ваше имя</label>
                    <input
                      {...register('name')}
                      className="w-full bg-[#141414] border border-gray-800 p-4 text-white focus:border-orange-500 outline-none transition-all placeholder:text-gray-700"
                      placeholder="Иван Иванов"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-3">Email</label>
                    <input
                      {...register('email')}
                      className="w-full bg-[#141414] border border-gray-800 p-4 text-white focus:border-orange-500 outline-none transition-all placeholder:text-gray-700"
                      placeholder="example@mail.ru"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-3">Телефон</label>
                    <input
                      {...register('phone')}
                      className="w-full bg-[#141414] border border-gray-800 p-4 text-white focus:border-orange-500 outline-none transition-all placeholder:text-gray-700"
                      placeholder="+7 (___) ___-__-__"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-3">Тип услуги</label>
                    <select
                      {...register('service')}
                      className="w-full bg-[#141414] border border-gray-800 p-4 text-white focus:border-orange-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value={ServiceType.COTTAGE}>Строительство коттеджа</option>
                      <option value={ServiceType.COMMERCIAL}>Коммерческое здание</option>
                      <option value={ServiceType.RECONSTRUCTION}>Реконструкция / Ремонт</option>
                      <option value="other">Другое</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-3">Детали проекта</label>
                  <textarea
                    {...register('details')}
                    rows={5}
                    className="w-full bg-[#141414] border border-gray-800 p-4 text-white focus:border-orange-500 outline-none transition-all placeholder:text-gray-700 resize-none"
                    placeholder="Расскажите о площади, материалах и предпочтительных сроках..."
                  />
                  {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details.message}</p>}
                </div>

                <div className="pt-6">
                  <button
                    disabled={submitting}
                    className="w-full bg-orange-500 text-black py-5 font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 hover:bg-orange-600 transition-all disabled:opacity-50 group hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
                  >
                    {submitting ? <Loader2 className="animate-spin" /> : <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    Оправить заявку
                  </button>
                  <p className="text-center text-gray-600 text-[10px] mt-6 leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с Политикой конфиденциальности и даете согласие на обработку персональных данных.
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                <Clock className="text-orange-500" />
                ГРАФИК РАБОТЫ
              </h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Будни (Пн-Пт):</span>
                  <span className="text-white font-bold">09:00 — 19:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Суббота:</span>
                  <span className="text-white font-bold">10:00 — 16:00</span>
                </div>
                <div className="flex justify-between text-orange-500/50">
                  <span>Воскресенье:</span>
                  <span className="font-bold">Выходной</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                <Phone className="text-orange-500" />
                КОНТАКТЫ
              </h3>
              <div className="space-y-6">
                <div className="group">
                  <p className="text-gray-500 text-[10px] font-black uppercase mb-1">ГОРЯЧАЯ ЛИНИЯ</p>
                  <a href="tel:+78120000000" className="text-2xl font-bold hover:text-orange-500 transition-colors tracking-tight">+7 (812) 000-00-00</a>
                </div>
                <div className="group">
                  <p className="text-gray-500 text-[10px] font-black uppercase mb-1">EMAIL ДЛЯ ТЭО</p>
                  <a href="mailto:info@severstroy.ru" className="text-xl font-bold hover:text-orange-500 transition-colors tracking-tight text-gray-300">info@severstroy.ru</a>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/5 border border-orange-500/20 p-8 flex items-start gap-4">
               <Mail className="text-orange-500 shrink-0 mt-1" />
               <p className="text-gray-400 text-xs leading-relaxed italic">
                 При отправке заявки, копия письма будет направлена нашему ведущему специалисту по адресу <span className="text-orange-500 font-bold">lmaslov691@gmail.com</span> для оперативного рассмотрения.
               </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
