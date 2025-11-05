import { useState, useEffect } from 'react';
import Banner from '@/components/ui/banners';
import { LabeledInput } from '@/components/ui/inputs';
export default function Design() {
  const [tab, setTab] = useState('Forms');

  return (
    <main>
      <p>
        This page will hold some components I want to see laid out or in
        different variant styles.
      </p>
      <ul>
        <li onClick={() => setTab('Banners')}>banners</li>
        <li onClick={() => setTab('Forms')}>forms</li>
        <li onClick={() => setTab('Icons')}>icons</li>
      </ul>
      <Banners tab={tab} />
      <Forms tab={tab} />
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

function Forms({ tab }) {
  const [value, setValue] = useState('');
  return (
    <ComponentList title="Forms" tab={tab} value={value} setValue={setValue}>
      <LabeledInput
        name={'email'}
        label={'Email'}
        placeholder={'johndoe@email.com'}
        type={'email'}
      />
      <LabeledInput
        name={'password'}
        label={'Password'}
        placeholder={'Enter password'}
        type={'password'}
      />
    </ComponentList>
  );
}
