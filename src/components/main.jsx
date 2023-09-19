import PrimaryButton from './primary-button'
import SecondaryButton from './secondary-button'

function Main() {
  return (
    <div className="md:flex md:flex-row p-20 h-max">
      <div className="basis-1/2 items-center justify-center px-24">
        <img src="src/assets/mainVaquinha.png" className="w-fit"/>
      </div>
      <div className="basis-1/2 text-white space-y-3 flex flex-col justify-center">
        <h1 className="title font-black text-display text-6xl uppercase drop-shadow-3xl">VAQUINHA</h1>
        <h3 className="title font-black text-lg"> Rifa </h3>
        <p> A fim de levantar R$5.000,00 para <b>determinada causa</b>, estamos fazendo uma rifa </p>
       <p> Qualquer ajuda é válida!</p>
      <div className="flex flex-wrap"><PrimaryButton href="#rifa" name="Colabore"/> <SecondaryButton href="#entenda" name="Entenda"/></div>
      </div>
    </div>
  )
}

export default Main
