import * as React from "react";
import Image from 'next/image';
import { SelectField } from "./components/SelectField";
import { CardHeader } from "./components/CardHeader";
import { PatientCard } from "./components/PatientCard";
import checkup from "./images/Checkup.svg"
import confirm from "./images/Confirm.svg"
import next_arrow from "./images/Next_Arrow.svg"
import prev_arrow from "./images/Prev_Arrow.svg"
import cardio from "./images/Icon_Cardio.svg"
import anestesia from "./images/Icon_Anestesia.svg"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex overflow-hidden flex-wrap gap-10 px-16 py-7 bg-accent max-md:px-5">
        <div className="my-auto text-2xl text-center text-black">
          <span className="text-white font-['Tilt_Warp']">Qx</span>
          <span className="text-green-40 font-['Tilt_Warp']">Wise</span>
        </div>
        <div className="flex gap-7 ml-auto text-xs">
          <div className="px-px py-1 my-auto text-right text-gray-50">Médico</div>
          <div className="flex flex-col text-center text-primary">
            <div className="flex items-center justify-center px-2 bg-teal-200 rounded-full h-[30px] w-[30px]">MJ</div>
          </div>
        </div>
      </div>
      <div className="box-border flex relative flex-col shrink-0 px-14 mt-12 mb-6">
        <div className="flex flex-col whitespace-nowrap text-light-grey-80">
          <div className="flex gap-5 justify-between ml-9 w-[65%]">
            <div className="px-8">Agenda</div>
            <div className="px-8">Programación</div>
            <div className="flex flex-col font-bold text-primary">
              <div className="px-8">Priorización</div>
              <div className="bg-primary border-primary border-solid border-[2px]" />
            </div>
            <div className="px-8">Solicitudes</div>
            <div className="px-8">Tabla Final</div>
          </div>
          <div className="max-h-px bg-primary border border-primary border-solid" />
        </div>
        <div className="flex flex-row justify-between px-8 pt-5 pb-4 text-xl text-primary bg-light-grey-10">
          <div className="box-border flex relative flex-row">
            <Image
              loading="lazy"
              src={checkup}
              alt="Surgical evaluation icon"
              className="object-contain my-auto w-7 rounded-none aspect-square"
            />
            <div className="my-auto w-auto font-semibold">Tabla de Evaluación Quirúrgica</div>
          </div>
          <div className="box-border flex relative flex-wrap gap-4">
            <SelectField
              label="Especialidad"
              placeholder="Seleccionar Especialidad"
            />
            <SelectField
              label="Médico Asignado"
              placeholder="Seleccionar Nombre del Médico"
            />
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex gap-5">
            <div className="flex flex-col w-3/12">
              <div className="flex overflow-hidden flex-col grow mx-auto w-full h-auto text-sm font-medium text-center bg-light-red rounded-xl text-dark-gray">
                <CardHeader
                  title="No se programa"
                  icon={next_arrow}
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12">
              <div className="flex overflow-hidden flex-col grow gap-8 pb-16 mx-auto w-full h-auto text-sm font-medium text-center rounded-xl bg-light-grey-10 text-dark-gray">
                <CardHeader
                  title="Solicitudes Pendientes"
                  icon={prev_arrow}
                  count={1}
                />
                <PatientCard
                  specialty="Traumatología"
                  doctor="Dr. José Pedro Sans"
                  patientName="Jorge Avendaño Pérez"
                  age={35}
                  medicalRecord="77884"
                  diagnosis="Calcificación Talón"
                  intervention="Extirpación en talón"
                  hasPreAnesthesia={true}
                  requestTime="3 días"
                  suspensions={2}
                  icons={[
                    cardio,
                    anestesia,
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12">
              <div className="flex overflow-hidden flex-col grow mx-auto w-full h-auto text-sm font-medium text-center bg-blue-light-10 rounded-xl text-dark-gray">
                <CardHeader
                  title="Por Programar"
                  icon={next_arrow}
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12">
              <div className="flex overflow-hidden flex-col grow mx-auto w-full h-auto text-sm font-medium text-center bg-green-20 rounded-xl text-dark-gray">
                <CardHeader
                  title="En Programación"
                  icon={confirm}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
