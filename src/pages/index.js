import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Homepage() {
  return (
    <Layout
      title="Welcome to BaseForge"
      description="The official guide for using your BaseForge platform">
      <main style={{padding: '4rem 1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <img src="/img/logo.svg" alt="BaseForge Logo" style={{width: 120, height: 120, marginBottom: '1rem'}} />
        <h1 id="titolo" style={{fontSize: '3rem', color: '#212121'}}>Welcome to BaseForge Docs 👋</h1>
        <p id="paragrafo" style={{maxWidth: 600, margin: '1rem auto', color: '#212121'}}>
          Learn how to create your packs, manage integrations and master your platform like a pro.
        </p>
        
        <div style={{marginTop: '2rem'}}>
          <Link
          style={{fontFamily: 'Orbitron'}}
            className="button button--primary button--lg"
            to="/getting-started">
            Go to the Docs
          </Link>
          <Link
          style={{fontFamily: 'Orbitron', marginLeft: '1rem'}}
            className="button button--secondary button--lg"
            
            to="https://demo.base-forge.com">
            Open Demo
          </Link>
        </div>
      </main>
    </Layout>
  );
}