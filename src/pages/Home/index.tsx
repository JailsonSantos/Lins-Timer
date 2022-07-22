import { HandPalm, Play } from 'phosphor-react'
import * as zod from 'zod' // Quando biblioteca não tem export default, usa-se o import desta forma
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { useContext } from 'react'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { CyclesContext } from '../../contexts/CyclesContext'

// controlled (Busca a informação em tempo real de monitoramento), formulários com poucos inputs;
// uncontrolled (Busca a informação do controler apenas quando precisar dela),
// Recomendo usar em formulários com muitos inputs, para melhorar a performance;

// function register recebe o nome do input, e retorna vários metodos para trabalhar com inputs

const newCycleFormValidationScheme = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O clico precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

// Interface recomenda-se usar quando se está criando algo próprio
/* interface NewCycleFormData {
  task: string
  minutesAmount: number
}
 */
// Type recomenda-se usar quando se está fazendo referencia a algo já existente
type NewCycleFormData = zod.infer<typeof newCycleFormValidationScheme>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationScheme),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  // o watch é um component controlled
  const task = watch('task')

  // Variáveis auxiliares
  const isSubmitDisabled = !task

  /*
   * Drop Drilling -> Quando a gente tem MUITAS propriedades APENAS para comunicação entre componentes
   * Context API -> Permite compartilharmos informações entre VÁRIOS componentes ao mesmo tempo
   */

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
