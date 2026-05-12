import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/Authschemas';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, AlertCircle, Loader2 } from 'lucide-react';
import { useEffect } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, status } = useSelector((state) => state.auth);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  useEffect(() => {
    dispatch(clearError());
    if (user) {
      navigate(`/profile/${user.id_pengguna}`);
    }
  }, [user, navigate, dispatch]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 bg-gradient-to-br from-bg-soft to-primary-light/10">
      <div className="card max-w-md w-full p-8 md:p-12 animate-in fade-in zoom-in duration-700">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <LogIn size={32} />
          </div>
          <h1 className="text-4xl font-serif text-primary-dark mb-2">Welcome Back</h1>
          <p className="text-primary-dark/60">Enter your credentials to continue.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-3 animate-in slide-in-from-top-2">
            <AlertCircle size={20} />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="btn-primary w-full py-4 text-lg mt-4 shadow-primary/20 shadow-xl flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Logging in...
              </>
            ) : 'Login'}
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-primary-dark/60">
          Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Sign up for free</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
