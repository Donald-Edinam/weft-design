"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  FileText, 
  Layers, 
  ExternalLink, 
  ArrowLeft,
  Bell,
  User as UserIcon,
  Sun,
  Calendar,
  Building2,
  Video,
  Phone,
  RotateCcw,
  X,
  Pill,
  Clock,
  CheckCircle2,
  Info,
  AlertTriangle,
  AlertCircle,
  Lock,
  Stethoscope,
  CalendarDays,
  Plus,
  ChevronRight
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { clsx } from "clsx";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"] 
});

// ----------------------------------------------------------------------
// CSS Tokens per DESIGN.md
// ----------------------------------------------------------------------
const THEME = {
  primary: "#0D7C66",
  primaryHover: "#0A6352",
  primaryLight: "#E6F5F1",
  primaryDark: "#065445",
  bg: "#FAFBFC",
  surface: "#FFFFFF",
  border: "#E2E5E9",
  borderStrong: "#CBD0D6",
  textPrimary: "#1A202C",
  textSecondary: "#4A5568",
  textMuted: "#A0AEC0",
  success: "#2F855A",
  warning: "#C05621",
  error: "#C53030",
  info: "#2B6CB0",
};

// ----------------------------------------------------------------------
// Mock Data
// ----------------------------------------------------------------------
const APPOINTMENTS = [
  {
    id: 1,
    doctor: "Dr. Kwesi Mensah",
    specialty: "General Practitioner",
    time: "Today, 2:30 PM",
    type: "In-person",
    status: "confirmed",
    initials: "KM",
  },
  {
    id: 2,
    doctor: "Dr. Abena Serwaa",
    specialty: "Cardiologist",
    time: "Tomorrow, 10:00 AM",
    type: "Video",
    status: "upcoming",
    initials: "AS",
  }
];

const MEDICATIONS = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg, Once daily",
    nextDose: "8:00 AM",
    refillProgress: 75,
    taken: false,
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg, Twice daily",
    nextDose: "Tonight, 9:00 PM",
    refillProgress: 30,
    taken: true,
  }
];

export default function HealthWellnessPreview() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "booking">("dashboard");
  const [bookingStep, setBookingStep] = useState(1);
  const [takenMeds, setTakenMeds] = useState<number[]>([]);

  // GENTLE Animation Configurations
  const gentle = {
    type: "tween",
    ease: "easeOut",
    duration: 0.3
  };

  const markAsTaken = (id: number) => {
    setTakenMeds(prev => [...prev, id]);
  };

  return (
    <div className={clsx("min-h-screen selection:bg-[#0D7C66]/20 pt-[48px]", jakarta.className)} style={{ backgroundColor: THEME.bg, color: THEME.textSecondary }}>
      
      {/* 
        ========================================================================
        WEFT PREVIEW CHROME (Top Bar)
        ========================================================================
      */}
      <div className="fixed top-0 left-0 w-full h-[48px] bg-[#000000] border-b border-white/10 flex items-center justify-between px-[16px] xl:px-[24px] z-[500]">
        <div className="flex items-center gap-[16px]">
          <span className="font-[600] text-white text-[14px]">Alma Health Portal</span>
          <div className="h-[14px] w-[1px] bg-white/20" />
          <div className="flex items-center gap-[12px] text-[#A1A1AA] text-[12px] font-mono">
            <span className="flex items-center gap-[6px]">
              <FileText className="w-[12px] h-[12px]" />
              423 lines
            </span>
            <span className="flex items-center gap-[6px]">
              <Layers className="w-[12px] h-[12px]" />
              12 sections
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[24px] text-[13px] font-[500]">
          <Link href="/systems/health-wellness/DESIGN.md" className="flex items-center gap-[6px] text-[#EAB308] hover:text-[#CA8A04] transition-colors">
            <ExternalLink className="w-[14px] h-[14px]" />
            View DESIGN.md
          </Link>
          <Link href="/sys" className="flex items-center gap-[6px] text-[#A1A1AA] hover:text-white transition-colors">
            <ArrowLeft className="w-[14px] h-[14px]" />
            All Systems
          </Link>
        </div>
      </div>

      {/* 
        ========================================================================
        PORTAL HEADER
        ========================================================================
      */}
      <nav className="h-[64px] bg-white border-b border-[#E2E5E9] sticky top-[48px] z-[100] flex items-center justify-center px-[32px]">
        <div className="max-w-[960px] w-full flex items-center justify-between">
          <div className="flex items-center gap-[32px]">
            <span className="text-[18px] font-[700] text-[#0D7C66]">Alma Health</span>
            <div className="hidden md:flex items-center gap-[24px]">
              <button 
                onClick={() => setActiveTab("dashboard")}
                className={clsx("h-[64px] text-[16px] font-[500] border-b-2 transition-all", activeTab === "dashboard" ? "border-[#0D7C66] text-[#0D7C66]" : "border-transparent text-[#4A5568]")}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab("booking")}
                className={clsx("h-[64px] text-[16px] font-[500] border-b-2 transition-all", activeTab === "booking" ? "border-[#0D7C66] text-[#0D7C66]" : "border-transparent text-[#4A5568]")}
              >
                Appointments
              </button>
              <button className="h-[64px] text-[16px] font-[500] border-b-2 border-transparent text-[#4A5568]">Prescriptions</button>
            </div>
          </div>
          <div className="flex items-center gap-[16px]">
            <button className="w-[40px] h-[40px] flex items-center justify-center text-[#4A5568] hover:bg-[#F7F5F2] rounded-full transition-colors">
              <Bell className="w-[20px] h-[20px]" />
            </button>
            <div className="w-[40px] h-[40px] rounded-full bg-[#E6F5F1] flex items-center justify-center text-[#0D7C66] font-[600] text-[14px]">
              EO
            </div>
          </div>
        </div>
      </nav>

      {/* 
        ========================================================================
        MAIN CONTENT (Dashboard)
        ========================================================================
      */}
      <main className="max-w-[960px] mx-auto px-[16px] md:px-[32px] py-[32px] md:py-[48px]">
        <AnimatePresence mode="wait">
          {activeTab === "dashboard" ? (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={gentle}
              className="flex flex-col gap-[32px]"
            >
              {/* Welcome */}
              <div>
                <div className="flex items-center gap-[8px] text-[#0D7C66] mb-[4px]">
                  <Sun className="w-[18px] h-[18px]" />
                  <span className="text-[14px] font-[600] uppercase tracking-[0.5px]">Good morning</span>
                </div>
                <h1 className="text-[28px] font-[700] text-[#1A202C]">Welcome back, Efua</h1>
                <p className="text-[16px] text-[#4A5568] mt-[4px]">You have 2 upcoming appointments this week.</p>
              </div>

              {/* Alerts */}
              <AlertBanner 
                type="info" 
                icon={Info} 
                message="Your lab results from April 4 are now available for review." 
              />

              {/* Appointments Section */}
              <section className="flex flex-col gap-[20px]">
                <div className="flex items-center justify-between">
                  <h2 className="text-[22px] font-[600] text-[#1A202C]">Upcoming Appointments</h2>
                  <button onClick={() => setActiveTab("booking")} className="text-[16px] font-[600] text-[#0D7C66] hover:underline flex items-center gap-[4px]">
                    Book new <Plus className="w-[16px] h-[16px]" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  {APPOINTMENTS.map(appt => (
                    <AppointmentCard key={appt.id} appt={appt} />
                  ))}
                </div>
              </section>

              {/* Medications Section */}
              <section className="flex flex-col gap-[20px]">
                <h2 className="text-[22px] font-[600] text-[#1A202C]">Daily Medications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  {MEDICATIONS.map(med => (
                    <MedicationCard 
                      key={med.id} 
                      med={med} 
                      isTaken={takenMeds.includes(med.id)} 
                      onTake={() => markAsTaken(med.id)} 
                    />
                  ))}
                </div>
              </section>

              {/* Security Banner */}
              <div className="mt-[16px] flex items-center gap-[8px] text-[#A0AEC0] text-[13px] justify-center md:justify-start">
                <Lock className="w-[14px] h-[14px]" />
                <span>Your medical information is encrypted and secure</span>
              </div>
            </motion.div>
          ) : (
            /* Booking Flow */
            <motion.div 
              key="booking"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={gentle}
              className="flex flex-col gap-[40px] max-w-[600px] mx-auto"
            >
              <div className="text-center">
                <h2 className="text-[28px] font-[700] text-[#1A202C]">Book an Appointment</h2>
                <p className="text-[16px] text-[#4A5568] mt-[8px]">Schedule a visit with one of our healthcare professionals.</p>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center justify-center gap-[12px]">
                {[
                  { step: 1, icon: Stethoscope, label: "Specialty" },
                  { step: 2, icon: CalendarDays, label: "Time" },
                  { step: 3, icon: CheckCircle2, label: "Confirm" }
                ].map((s, idx) => (
                  <React.Fragment key={s.step}>
                    <div className="flex flex-col items-center gap-[8px]">
                      <div className={clsx(
                        "w-[40px] h-[40px] rounded-full flex items-center justify-center border-2 transition-colors",
                        bookingStep >= s.step ? "bg-[#E6F5F1] border-[#0D7C66] text-[#0D7C66]" : "bg-white border-[#E2E5E9] text-[#A0AEC0]"
                      )}>
                        <s.icon className="w-[20px] h-[20px]" />
                      </div>
                      <span className={clsx("text-[12px] font-[600] uppercase tracking-[0.5px]", bookingStep >= s.step ? "text-[#0D7C66]" : "text-[#A0AEC0]")}>
                        {s.label}
                      </span>
                    </div>
                    {idx < 2 && <div className={clsx("w-[40px] h-[2px] mb-[20px]", bookingStep > s.step ? "bg-[#0D7C66]" : "bg-[#E2E5E9]")} />}
                  </React.Fragment>
                ))}
              </div>

              {/* Step Content */}
              <div className="bg-white border border-[#E2E5E9] rounded-[12px] p-[32px] shadow-sm min-h-[300px] flex flex-col items-center justify-center text-center">
                <AnimatePresence mode="wait">
                  {bookingStep === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={gentle}>
                      <h3 className="text-[18px] font-[600] text-[#1A202C] mb-[16px]">Select a Specialty</h3>
                      <div className="grid grid-cols-1 gap-[12px] w-full max-w-[320px]">
                        {["General Practice", "Cardiology", "Pediatrics"].map(opt => (
                          <button key={opt} onClick={() => setBookingStep(2)} className="h-[56px] px-[24px] border border-[#E2E5E9] rounded-[8px] text-[16px] font-[500] hover:border-[#0D7C66] hover:bg-[#F7F5F2] transition-all flex items-center justify-between">
                            {opt}
                            <ChevronRight className="w-[18px] h-[18px] text-[#A0AEC0]" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {bookingStep === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={gentle}>
                      <h3 className="text-[18px] font-[600] text-[#1A202C] mb-[16px]">Choose a Date</h3>
                      <div className="w-full max-w-[320px]">
                        <input type="date" className="w-full h-[48px] px-[16px] border border-[#CBD0D6] rounded-[8px] text-[16px] outline-none focus:border-[#0D7C66] mb-[24px]" />
                        <button onClick={() => setBookingStep(3)} className="w-full h-[48px] bg-[#0D7C66] text-white rounded-[8px] font-[600] hover:bg-[#0A6352] transition-colors">
                          Continue
                        </button>
                      </div>
                    </motion.div>
                  )}
                  {bookingStep === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={gentle}>
                      <div className="w-[64px] h-[64px] bg-[#E6F5F1] rounded-full flex items-center justify-center mx-auto mb-[24px]">
                        <CheckCircle2 className="w-[32px] h-[32px] text-[#0D7C66]" />
                      </div>
                      <h3 className="text-[18px] font-[600] text-[#1A202C] mb-[8px]">Ready to confirm?</h3>
                      <p className="text-[15px] text-[#4A5568] mb-[24px]">Review your appointment details before proceeding.</p>
                      <button onClick={() => { setActiveTab("dashboard"); setBookingStep(1); }} className="w-full h-[48px] bg-[#0D7C66] text-white rounded-[8px] font-[600] hover:bg-[#0A6352] transition-colors">
                        Confirm Appointment
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-[8px] text-[#A0AEC0] text-[13px] justify-center">
                <Lock className="w-[14px] h-[14px]" />
                <span>Your privacy is our priority. </span>
                <Link href="#" className="underline">Security Policy</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function AppointmentCard({ appt }: { appt: typeof APPOINTMENTS[0] }) {
  return (
    <div className={clsx(
      "bg-white border border-[#E2E5E9] rounded-[12px] p-[20px] shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-l-4 transition-all hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]",
      appt.status === "confirmed" ? "border-l-[#2F855A]" : "border-l-[#C05621]"
    )}>
      <div className="flex items-center justify-between mb-[16px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[40px] h-[40px] rounded-full bg-[#FAFBFC] border border-[#E2E5E9] flex items-center justify-center font-[600] text-[#0D7C66]">
            {appt.initials}
          </div>
          <div>
            <h4 className="text-[16px] font-[600] text-[#1A202C] line-height-[1]">{appt.doctor}</h4>
            <span className="text-[14px] text-[#A0AEC0]">{appt.specialty}</span>
          </div>
        </div>
        <div className={clsx(
          "px-[8px] py-[4px] rounded-[4px] text-[12px] font-[600] flex items-center gap-[4px]",
          appt.type === "In-person" ? "bg-[#EBF8FF] text-[#2B6CB0]" : 
          appt.type === "Video" ? "bg-[#F0FFF4] text-[#2F855A]" : "bg-[#F7F5F2] text-[#4A5568]"
        )}>
          {appt.type === "In-person" && <Building2 className="w-[12px] h-[12px]" />}
          {appt.type === "Video" && <Video className="w-[12px] h-[12px]" />}
          {appt.type === "Phone" && <Phone className="w-[12px] h-[12px]" />}
          {appt.type}
        </div>
      </div>
      <div className="flex items-center gap-[8px] text-[16px] font-[600] text-[#1A202C] mb-[20px]">
        <Calendar className="w-[18px] h-[18px] text-[#0D7C66]" />
        {appt.time}
      </div>
      <div className="flex items-center gap-[12px] border-t border-[#E2E5E9] pt-[16px]">
        <button className="flex-1 h-[40px] text-[14px] font-[600] text-[#4A5568] flex items-center justify-center gap-[6px] hover:bg-[#F7F5F2] rounded-[8px] transition-colors">
          <RotateCcw className="w-[14px] h-[14px]" />
          Reschedule
        </button>
        <button className="text-[14px] font-[600] text-[#C53030] px-[12px] h-[40px] flex items-center justify-center gap-[4px] hover:bg-[#FFF5F5] rounded-[8px] transition-colors">
          <X className="w-[14px] h-[14px]" />
          Cancel
        </button>
      </div>
    </div>
  );
}

function MedicationCard({ med, isTaken, onTake }: { med: typeof MEDICATIONS[0], isTaken: boolean, onTake: () => void }) {
  return (
    <div className="bg-white border border-[#E2E5E9] rounded-[12px] p-[20px] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col gap-[16px]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-[12px]">
          <div className="w-[40px] h-[40px] rounded-lg bg-[#E6F5F1] flex items-center justify-center text-[#0D7C66]">
            <Pill className="w-[20px] h-[20px]" />
          </div>
          <div>
            <h4 className="text-[18px] font-[600] text-[#1A202C]">{med.name}</h4>
            <p className="text-[14px] text-[#A0AEC0]">{med.dosage}</p>
          </div>
        </div>
        {isTaken && <CheckCircle2 className="w-[20px] h-[20px] text-[#2F855A]" />}
      </div>

      <div className="flex flex-col gap-[6px]">
        <div className="flex items-center justify-between text-[13px]">
          <span className="text-[#A0AEC0]">Next Dose: <Clock className="inline w-[14px] h-[14px] mb-[2px]" /> <span className="font-[600] text-[#1A202C] ml-[2px]">{med.nextDose}</span></span>
          <span className="text-[#A0AEC0] font-[500]">Refill soon</span>
        </div>
        <div className="w-full h-[6px] bg-[#E2E5E9] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${med.refillProgress}%` }}
            transition={{ duration: 1, ease: "linear" }}
            className={clsx("h-full", med.refillProgress < 40 ? "bg-[#C05621]" : "bg-[#0D7C66]")} 
          />
        </div>
      </div>

      <button 
        disabled={isTaken}
        onClick={onTake}
        className={clsx(
          "w-full h-[48px] rounded-[8px] font-[600] transition-all flex items-center justify-center gap-[8px]",
          isTaken ? "bg-[#F0FFF4] text-[#2F855A] cursor-default" : "bg-[#0D7C66] text-white hover:bg-[#0A6352]"
        )}
      >
        {isTaken ? (
          <>
            <CheckCircle2 className="w-[18px] h-[18px]" />
            Taken
          </>
        ) : (
          "Mark as Taken"
        )}
      </button>
    </div>
  );
}

function AlertBanner({ type, icon: Icon, message }: { type: string, icon: any, message: string }) {
  return (
    <div className={clsx(
      "border-l-4 rounded-[8px] p-[16px] flex items-start gap-[16px]",
      type === "info" && "bg-[#EBF8FF] border-l-[#2B6CB0] text-[#2B6CB0]",
      type === "success" && "bg-[#F0FFF4] border-l-[#2F855A] text-[#2F855A]",
      type === "warning" && "bg-[#FFFAF0] border-l-[#C05621] text-[#C05621]",
      type === "error" && "bg-[#FFF5F5] border-l-[#C53030] text-[#C53030]"
    )}>
      <Icon className="w-[20px] h-[20px] shrink-0 mt-[2px]" />
      <span className="text-[16px] text-inherit">{message}</span>
      <button className="ml-auto opacity-40 hover:opacity-100 transition-opacity">
        <X className="w-[20px] h-[20px]" />
      </button>
    </div>
  );
}
