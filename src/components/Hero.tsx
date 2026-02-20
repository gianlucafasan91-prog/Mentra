import { ArrowRight, Users, Calendar, Activity, Moon, RefreshCcw, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/foto1.png')] bg-cover bg-center opacity-35"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">LA PIATTAFORMA PER LA PERFORMANCE TOTALE</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            La tua performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              non è solo fisica.
            </span>
            <br />
            È mentale.
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Mentra integra psicologia dello sport, allenamento e nutrizione in un'unica piattaforma intelligente per atleti ambiziosi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Inizia il tuo percorso
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Trova il tuo team
            </button>

            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Prenota consulenza
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-1">Allena</div>
              <div className="text-slate-400">il corpo</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-1">Allena</div>
              <div className="text-slate-400">la mente</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-1">Monitora</div>
              <div className="text-slate-400">la crescita</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-1">Raggiungi</div>
              <div className="text-slate-400">il tuo picco</div>
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Activity className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-300">Monitoraggio dati biometrici</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-300">Consigli sugli allenamenti caricati</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Moon className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-300">Monitoraggio sonno</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <RefreshCcw className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-300">Recovery intelligente</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:col-span-2 lg:col-span-1">
              <Users className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-300">Dati visibili a psicologo e personal trainer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
