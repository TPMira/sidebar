import { useEffect, useState } from "react";


export function ShowResult({ imc }) {
  const [message, setMessage] = useState("");

  

  return (
    <div className="flex w-full flex-col h-12">
      
        <span>
          Listar a <strong>{imc}</strong> SOL.
        </span>
      
    </div>
  );
}