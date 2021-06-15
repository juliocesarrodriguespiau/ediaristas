import Head from 'next/head'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais de sua localidade'} 
      />
    </div>
  );
}
