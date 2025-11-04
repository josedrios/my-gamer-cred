import { useState } from 'react';
import Banner from '@/components/ui/banners';
export default function Design() {
  const [tab, setTab] = useState('banners');
  return (
    <main>
      <p>
        This page will hold some components I want to see laid out or in
        different variant styles.
      </p>
      <ul>
        <li onClick={() => setTab('banners')}>banners</li>
        <li onClick={() => setTab('forms')}>forms</li>
        <li onClick={() => setTab('icons')}>icons</li>
      </ul>
      <ComponentList title="banners" tab={tab}>
        <Banner variant={'success'} />
        <Banner variant={'warning'} />
        <Banner variant={'danger'} />
      </ComponentList>
    </main>
  );
}

function ComponentList({ children, title, tab }) {
  return (
    <div
      className="component-list"
      style={{ display: title === tab ? 'block' : 'none' }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}
