import { useState } from 'react';
import Banner from '@/components/ui/banners';
import { InputSplit, LabeledInput } from '@/components/ui/inputs';
import { StandardButton } from '@/components/ui/buttons';
export default function Design() {
  const [tab, setTab] = useState('Buttons');

  return (
    <main>
      <p>
        This page will hold some components I want to see laid out or in
        different variant styles.
      </p>
      <ul>
        <li onClick={() => setTab('Banners')}>banners</li>
        <li onClick={() => setTab('Inputs')}>inputs</li>
        <li onClick={() => setTab('Icons')}>icons</li>
        <li onClick={() => setTab('Buttons')}>buttons</li>
      </ul>
      <Banners tab={tab} />
      <Inputs tab={tab} />
      <Buttons tab={tab} />
    </main>
  );
}

function ComponentList({ children, title, tab }) {
  if (title !== tab) return null;

  return (
    <div className="component-list">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function Banners({ tab }) {
  return (
    <ComponentList title="Banners" tab={tab}>
      <Banner variant={'success'} />
      <Banner variant={'warning'} />
      <Banner variant={'danger'} />
    </ComponentList>
  );
}

function Buttons({ tab }) {
  return (
    <ComponentList title="Buttons" tab={tab}>
      <StandardButton full>This is a full button</StandardButton>
      <StandardButton>Test</StandardButton>
      <StandardButton variant={'primary'}>Primary</StandardButton>
      <StandardButton variant={'test'}>Test Primary</StandardButton>
    </ComponentList>
  );
}

function Inputs({ tab }) {
  const [value, setValue] = useState('');
  return (
    <ComponentList title="Inputs" tab={tab} value={value} setValue={setValue}>
      <LabeledInput
        id={'email'}
        label={'Email'}
        placeholder={'johndoe@email.com'}
        type={'email'}
      />
      <LabeledInput
        id={'password'}
        label={'Password'}
        placeholder={'Enter password'}
        type={'password'}
      />
      <InputSplit>
        <LabeledInput
          id={'email'}
          label={'Email'}
          placeholder={'johndoe@email.com'}
          type={'email'}
        />
        <LabeledInput
          id={'password'}
          label={'Password'}
          placeholder={'Enter password'}
          type={'password'}
        />
      </InputSplit>
    </ComponentList>
  );
}
