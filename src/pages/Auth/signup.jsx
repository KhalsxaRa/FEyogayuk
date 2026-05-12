import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../schemas/Authschemas';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const { status, error } = useSelector((state) => state.auth);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = async (data) => {
    const resultAction = await dispatch(registerUser(data));
    if (registerUser.fulfilled.match(resultAction)) {
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="card max-w-md w-full text-center py-12 animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-serif text-primary-dark mb-4">Account Created!</h2>
          <p className="text-primary-dark/60">Redirecting you to login...</p>
        </div>
      </div> 
    );
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 bg-gradient-to-br from-bg-soft to-primary-light/10">
      <div className="card max-w-xl w-full p-8 md:p-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-primary-dark mb-2">Join YogaYuk</h1>
          <p className="text-primary-dark/60">Begin your journey to a more mindful life.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-3">
            <AlertCircle size={20} />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2 flex items-center gap-2">
                <User size={16} /> Full Name
              </label>
              <input
                {...register('nama')}
                className="input-field"
                placeholder="John Doe"
              />
              {errors.nama && <p className="mt-1 text-xs text-red-500">{errors.nama.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2 flex items-center gap-2">
                <Mail size={16} /> Email Address
              </label>
              <input
                {...register('email')}
                className="input-field"
                placeholder="john@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-dark mb-2 flex items-center gap-2">
              <Phone size={16} /> Phone Number
            </label>
            <input
              {...register('telepon')}
              className="input-field"
              placeholder="+62 812..."
            />
            {errors.telepon && <p className="mt-1 text-xs text-red-500">{errors.telepon.message}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2 flex items-center gap-2">
                <Lock size={16} /> Password
              </label>
              <input
                type="password"
                {...register('passw')}
                className="input-field"
                placeholder="••••••••"
              />
              {errors.passw && <p className="mt-1 text-xs text-red-500">{errors.passw.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2 flex items-center gap-2">
                <Lock size={16} /> Confirm Password
              </label>
              <input
                type="password"
                {...register('validasi_passw')}
                className="input-field"
                placeholder="••••••••"
              />
              {errors.validasi_passw && <p className="mt-1 text-xs text-red-500">{errors.validasi_passw.message}</p>}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full py-4 text-lg mt-4 shadow-primary/20 shadow-xl flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                create Account
              
              </>
            ) : 'Create Account'}
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-primary-dark/60">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
