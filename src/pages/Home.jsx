
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Zap } from 'lucide-react';
import { ssrDynamicImportKey } from 'vite/module-runner';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-bg-soft via-bg-soft/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000" 
            alt="Yoga Practice" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
              Find Your Balance
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary-dark mb-6 leading-tight">
              Elevate Your Soul with <span className="text-primary italic">YogaYuk</span>
            </h1>
            <p className="text-lg text-primary-dark/70 mb-10 leading-relaxed max-w-lg">
              Join our community of mindfulness. Discover expert-led classes designed to bring harmony to your body, mind, and spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="btn-primary flex items-center justify-center gap-2">
                Start Your Journey <ArrowRight size={18} />
              </Link>
              <Link to="/classes" className="btn-outline flex items-center justify-center gap-2">
                Explore Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary-dark mb-4">Why YogaYuk?</h2>
            <p className="text-primary-dark/60 max-w-2xl mx-auto">
              We provide a holistic approach to yoga, focusing on authenticity and modern convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Leaf className="text-primary" size={32} />, 
                title: "Holistic Health", 
                desc: "Focus on both physical strength and mental clarity through balanced practices." 
              },
              { 
                icon: <Shield className="text-primary" size={32} />, 
                title: "Expert Guidance", 
                desc: "Certified instructors with years of experience in various yoga disciplines." 
              },
              { 
                icon: <Zap className="text-primary" size={32} />, 
                title: "Flexible Schedule", 
                desc: "Access live and recorded sessions that fit perfectly into your busy life." 
              },
            ].map((feature, i) => (
              <div key={i} className="card group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif mb-3 text-primary-dark">{feature.title}</h3>
                <p className="text-primary-dark/60 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-light/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-serif text-primary-dark mb-6">Ready to breathe better?</h2>
          <p className="text-lg text-primary-dark/70 mb-10">
            Sign up today and get your first week of premium classes for free.
          </p>
          <Link to="/signup" className="btn-primary px-12 py-4 text-lg">
            Join the Community
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
