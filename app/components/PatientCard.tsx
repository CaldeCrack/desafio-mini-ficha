import * as React from "react";
import { PatientCardProps } from "./types";
import { SelectField } from "./SelectField";

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
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/87f8f280563842d18c1723bb4d594051/67ec2979d60985deb3bb8f6a1f3cb6f14973d3df6e8a746e64666e17b33203a3?apiKey=87f8f280563842d18c1723bb4d594051&"
          alt="Medical specialty icon"
          className="object-contain my-auto aspect-square w-[58px]"
        />
      </div>
      <div className="flex flex-col items-start px-4 py-3.5 w-full">
        <div className="flex gap-1 text-sm font-medium text-black">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/87f8f280563842d18c1723bb4d594051/2cf15a43b376c1c07588e6ce33409bc882e6b03ed984bb6c2c52d029ac64ded0?apiKey=87f8f280563842d18c1723bb4d594051&"
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
            <img
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
