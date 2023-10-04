"use client";
import { useDispatch, useSelector } from "react-redux";
import { addPessoa } from '../store/pessoaSlice';

import Input from "@/components/Input/Input";
import DropDown from "@/components/Input/DropDown";
import MultiSelect from "@/components/Input/MultiSelect";
import { useState } from "react";
import IconLink from "@/components/Elements/IconLink";

export default function App() {

  //Redux
  const dispath = useDispatch();

  const { pessoas } = useSelector((state: any) => state.pes);

  const sexos = [
    { label: "Masculino", value: "Masculino" },
    { label: "Feminino", value: "Feminino" },
    { label: "Neutro", value: "Neutro" }
  ]

  const generos = [
    { label: "Ação", value: "Ação" },
    { label: "Terror", value: "Terror" },
    { label: "Suspense", value: "Suspense" },
    { label: "Aventura", value: "Aventura" },
    { label: "Herói", value: "Herói" }
  ]

  const [pessoa, setPessoa] = useState({
    Nome: "",
    Sexo: "",
    Genero: []
  });

  const [erros, setErros] = useState<string[]>([]);

  const registrar = () => {

    var _erros = [];

    !pessoa.Nome &&
      _erros.push("Nome");
    !pessoa.Sexo &&
      _erros.push("Sexo");
    pessoa.Genero.length == 0 &&
      _erros.push("Genero");

    if (_erros.length == 0) {
      dispath(addPessoa({ id: Date.now(), Nome: pessoa.Nome, Sexo: pessoa.Sexo, Genero: pessoa.Genero }));
      setPessoa({
        Nome: "",
        Sexo: "",
        Genero: []
      })
    } else
      setErros(_erros);
  }

  const onChange = (event: any) => {
    const { value, name } = event.target;
    setErros(erros.filter(e => e !== name));
    setPessoa({ ...pessoa, [name]: value });
  }

  return (
    <main>
      <h1>Início</h1>
      <hr />
      <div className="form mb-5 flex align-end">
        <Input title="Nome" value={pessoa.Nome} name="Nome" error={{ show: erros.includes("Nome"), help: "Campo obrigatório" }} onChange={onChange} required width="w-40p" />
        <DropDown title="Sexo" value={pessoa.Sexo} name="Sexo" error={{ show: erros.includes("Sexo"), help: "Campo obrigatório" }} onChange={onChange} required options={sexos} width="w-20p" />
        <MultiSelect title="Gênero" value={pessoa.Genero} name="Genero" error={{ show: erros.includes("Genero"), help: "Campo obrigatório" }} onChange={onChange} options={generos} width="w-30p" />
        <button className="h-40 w-10p" onClick={registrar}>Registrar</button>
      </div>

      {
        pessoas.map((m: any, i: any) => <div className="row" key={i}>
          <span className="w-40p">{m.Nome}</span>
          <span className="w-20p">{m.Sexo}</span>
          <span className="w-10"><IconLink icon="icon icon-film" tooltip={{ position: "right", content: m.Genero.join(' • ') }} /></span>
        </div>)
      }

    </main>
  )
}
