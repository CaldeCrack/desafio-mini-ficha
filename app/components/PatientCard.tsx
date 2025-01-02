import * as React from "react";
import Image from 'next/image';
import { PatientCardProps } from "./types";
import { SelectField } from "./SelectField";
import joints_bone from "../images/Joints_Bone.svg";
import patient_avatar from "../images/Patient_Avatar.svg";

export const PatientCard: React.FC<PatientCardProps> = ({
  specialty,
  doctor,
  patientName,
  age,
  medicalRecord,
  diagnosis,
  intervention,
  hasPreAnesthesia,
  requestTime,
  suspensions,
  icons,
}) => {
  return (
    <div className="flex flex-col mx-auto w-11/12 bg-white rounded-lg border border-solid border-light-grey-50 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between px-4 py-1 w-full text-white bg-primary rounded-t-md">
        <div className="flex flex-col my-auto font-semibold">
          <div className="text-base">{specialty}</div>
          <div className="text-xs">{doctor}</div>
        </div>
		<Image
			loading="lazy"
			src={joints_bone}
			alt="Medical specialty icon"
			className="object-contain my-auto aspect-square w-[58px]"
		/>
      </div>
      <div className="flex flex-col items-start px-4 py-3.5 w-full">
        <div className="flex gap-1 text-sm font-medium text-black">
          <Image
            loading="lazy"
            src={patient_avatar}
            alt="Patient avatar"
            className="object-contain self-start my-auto w-6 aspect-square"
          />
          <div className="text-left font-medium">{patientName}<br />{age} años</div>
        </div>
        <div className="mt-2 text-xs text-left text-black">
          <span className="text-primary">Ficha médica:</span> {medicalRecord}<br />
          <span className="text-primary">Diagnóstico: </span>{diagnosis}<br />
          <span className="text-primary">Intervención: </span>{intervention}<br />
          <span className="text-primary">Evaluación preanestésica: </span>
		  {hasPreAnesthesia ? "Sí" : "No"}<br />
          <span className="text-primary">Tiempo de solicitud: </span>{requestTime}<br />
          <span className="text-primary">Suspensiones: </span>{suspensions}<br />
        </div>
        <div className="flex gap-0.5 my-2">
          {icons.map((icon, index) => (
            <Image
              key={index}
              loading="lazy"
              src={icon}
              alt={`Status icon ${index + 1}`}
              className="object-contain w-6 aspect-square"
            />
          ))}
        </div>
        <SelectField label="Tipo de Urgencia" placeholder="Seleccionar" width="full" />
      </div>
    </div>
  );
};
