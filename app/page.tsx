"use client";

import React, { useState } from 'react';
import { Shield, MapPin, AlertTriangle, Search } from 'lucide-react';

export default function MVPPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Barra de Progreso */}
        <div className="h-2 bg-slate-100">
          <div className={`h-full bg-blue-600 transition-all duration-500 ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`} />
        </div>

        <div className="p-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Shield className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">NoMeOcupan</h1>
          </div>

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Protege tu propiedad</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">Analizamos el riesgo de ocupación de tu vivienda en tiempo real con datos actualizados.</p>
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-200"
              >
                Comenzar Análisis
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MapPin className="text-blue-600" /> ¿Dónde está la vivienda?
              </h2>
              <div className="relative mb-6">
                <Search className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Introduce la dirección completa..."
                  className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <button 
                onClick={() => setStep(3)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all"
              >
                Ver Informe de Riesgo
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in zoom-in duration-500 text-center">
              <div className="inline-flex bg-orange-100 p-4 rounded-full mb-6">
                <AlertTriangle className="text-orange-600 w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Riesgo Detectado</h2>
              <p className="text-slate-600 mb-6">Hemos identificado actividad inusual en inmuebles similares cercanos.</p>
              <div className="bg-slate-900 text-white p-6 rounded-2xl mb-6 text-left">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Plan de Acción</p>
                <p className="text-sm leading-relaxed italic">"Se recomienda activar el protocolo de vigilancia legal y notificación a autoridades locales."</p>
              </div>
              <button 
                onClick={() => window.location.reload()}
                className="text-slate-400 text-sm hover:text-slate-600 transition"
              >
                Reiniciar análisis
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
