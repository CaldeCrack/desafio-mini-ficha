export interface CardHeaderProps {
  title: string;
  count?: number;
  icon: string;
  bgColor?: string;
}

export interface PatientCardProps {
  specialty: string;
  doctor: string;
  patientName: string;
  age: number;
  medicalRecord: string;
  diagnosis: string;
  intervention: string;
  hasPreAnesthesia: boolean;
  requestTime: string;
  suspensions: number;
  icons: string[];
}

export interface SelectFieldProps {
  label: string;
  placeholder: string;
  width?: string;
}
