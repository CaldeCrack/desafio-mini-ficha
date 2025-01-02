import * as React from "react";
import { SelectField } from "./components/SelectField";
import { CardHeader } from "./components/CardHeader";
import { PatientCard } from "./components/PatientCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex overflow-hidden flex-wrap gap-10 px-16 py-7 bg-blue-600 max-md:px-5">
        <div className="my-auto text-2xl text-center text-black">
          <span className="text-white font-['Tilt_Warp']">Qx</span>
          <span className="text-teal-500 font-['Tilt_Warp']">Wise</span>
        </div>
        <div className="flex gap-7 ml-auto text-xs whitespace-nowrap">
          <div className="z-10 px-px py-1 my-auto text-right text-gray-50">Médico</div>
          <div className="flex flex-col text-center text-blue-800">
            <div className="flex items-center justify-center px-2 bg-teal-200 rounded-full h-[30px] w-[30px]">MJ</div>
          </div>
        </div>
      </div>
      <div className="box-border flex relative flex-col shrink-0 px-14 mt-12 h-[200px]">
        <div className="flex z-10 flex-col shrink-0 self-stretch whitespace-nowrap basis-0 grow-0 text-slate-500 max-md:max-w-full">
          <div className="flex gap-5 justify-between ml-9 max-w-full w-[65%]">
            <div className="px-8 text-center grow-0">Agenda</div>
            <div className="px-8">Programación</div>
            <div className="flex flex-col font-bold leading-loose text-center text-blue-800">
              <div className="self-center px-8">Priorización</div>
              <div className="z-10 shrink-0 bg-blue-800 border-blue-800 border-solid border-[3px] h-[3px]" />
            </div>
            <div className="px-8 text-center text-gray-600">Solicitudes</div>
            <div className="shrink px-8 text-center text-gray-600 basis-auto grow-0 max-md:max-w-full">
              Tabla Final
            </div>
          </div>
          <div className="max-h-px bg-blue-800 border border-blue-800 border-solid max-md:max-w-full" />
        </div>
        <div className="flex flex-row justify-between px-8 pt-5 pb-4 text-xl font-semibold text-blue-800 bg-slate-100 grow-0 max-md:px-5">
          <div className="box-border flex relative flex-row shrink-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/87f8f280563842d18c1723bb4d594051/e5d53a64800f272636c4ae595b7c86a0a83a4602addce2327a3a49de9da0b1fb?apiKey=87f8f280563842d18c1723bb4d594051&"
              alt="Surgical evaluation icon"
              className="object-contain shrink-0 my-auto w-7 rounded-none aspect-square"
            />
            <div className="shrink my-auto w-auto basis-auto grow-0 max-md:max-w-full">
              Tabla de Evaluación Quirúrgica
            </div>
          </div>
          <div className="box-border flex relative flex-row flex-wrap shrink-0 gap-4">
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
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow mx-auto w-full h-auto text-sm font-medium text-center bg-red-100 rounded-xl text-zinc-700 max-md:pb-24 max-md:mt-5">
                <CardHeader
                  title="No se programa"
                  icon="https://cdn.builder.io/api/v1/image/assets/87f8f280563842d18c1723bb4d594051/c5b69f4d7bca08e4c0bddc4eb6a592967189861b9b4860f8186aeddae379b138?apiKey=87f8f280563842d18c1723bb4d594051&"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow gap-16 pb-16 mx-auto w-full h-auto text-sm font-medium text-center rounded-xl bg-slate-100 text-zinc-700 max-md:pb-24 max-md:mt-5">
                <CardHeader
                  title="Solicitudes Pendientes"
                  icon="https://cdn.builder.io/api/v1/image/assets/87f8f280563842d18c1723bb4d594051/a10d69746837bb26df5ed13bc4fa32df527153a17ad3036a98f316e7273659e8?apiKey=87f8f280563842d18c1723bb4d594051&"
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
                    "https://cdn.builder.io/api/v1/image/assets/87f8f280563842d18c1723bb4d594051/a2fd3e5c1b06853f3ecee03cc55611e5185c78f1c95bb10010e6cb3e8ef95be4?apiKey=87f8f280563842d18c1723bb4d594051&",
                    "https://cdn.builder.io/api/v1/image/assets/87f8f280563842d18c1723bb4d594051/fe9c65047af5c2eacfb35c691585a85f147c0ede82b103a6e93bd0b96ca35ec4?apiKey=87f8f280563842d18c1723bb4d594051&",
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow mx-auto w-full h-auto text-sm font-medium text-center bg-sky-100 rounded-xl text-zinc-700 max-md:pb-24 max-md:mt-5">
                <CardHeader
                  title="Por Programar"
                  icon="https://cdn.builder.io/api/v1/image/assets/87f8f280563842d18c1723bb4d594051/133fe594d8a755b4aeb346cf3d6104889270ba0a8f428fffb3692f4fabc0e5bf?apiKey=87f8f280563842d18c1723bb4d594051&"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow mx-auto w-full h-auto text-sm font-medium text-center bg-teal-100 rounded-xl text-zinc-700 max-md:pb-24 max-md:mt-5">
                <CardHeader
                  title="En Programación"
                  icon="https://cdn.builder.io/api/v1/image/assets/87f8f280563842d18c1723bb4d594051/8799d7dfe155f832bde1826768e65968d9407f1e43438044a81ce498449c4b2a?apiKey=87f8f280563842d18c1723bb4d594051&"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
