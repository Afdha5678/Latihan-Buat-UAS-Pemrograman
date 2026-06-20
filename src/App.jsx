import React, { useState } from 'react';
import { problemsData, allMaterials } from './data';
import './index.css';

// SVG Icons
const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const UploadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

const LoaderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="spin-animation">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState('problems');
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // State untuk Judging Simulator
  const [isJudging, setIsJudging] = useState(false);
  const [judgeProgress, setJudgeProgress] = useState('');
  const [testResults, setTestResults] = useState([]);
  const [finalScore, setFinalScore] = useState(null);

  const handleProblemClick = (problem) => {
    setSelectedProblem(problem);
    resetJudgingState();
  };

  const handleBack = () => {
    setSelectedProblem(null);
    resetJudgingState();
  };

  const resetJudgingState = () => {
    setSubmitStatus(null);
    setIsJudging(false);
    setJudgeProgress('');
    setTestResults([]);
    setFinalScore(null);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.name.endsWith('.scala')) {
      setSubmitStatus({
        type: 'error',
        message: 'Gagal! Hanya file ber-ekstensi .scala (Scala versi terbaru) yang diizinkan.'
      });
      return;
    }

    // Memulai proses penjurian (simulasi)
    resetJudgingState();
    setIsJudging(true);
    setJudgeProgress('Menunggu antrean server (Pending)...');

    setTimeout(() => {
      setJudgeProgress('Mengklarifikasi & Kompilasi kode Scala (Compiling)...');
      
      setTimeout(() => {
        // Simulasi 10% kemungkinan Compile Error
        if (Math.random() < 0.1) {
          setIsJudging(false);
          setSubmitStatus({ 
            type: 'error', 
            message: 'Compile Error: File .scala Anda memiliki kesalahan sintaks pada baris ke-4. Gagal di-kompilasi.' 
          });
          setFinalScore(0);
          return;
        }

        setJudgeProgress('Menjalankan Test Case...');
        let currentTest = 1;
        const totalTests = 10;
        let passed = 0;
        let currentResults = [];

        const testInterval = setInterval(() => {
          if (currentTest > totalTests) {
            clearInterval(testInterval);
            setIsJudging(false);
            const score = (passed / totalTests) * 100;
            setFinalScore(score);
            
            if (score === 100) {
              setSubmitStatus({ type: 'success', message: 'Tebaik! Jawaban Anda Benar (Accepted).' });
            } else {
              setSubmitStatus({ type: 'warning', message: `Penjurian Selesai. Masih ada test case yang gagal dilewati.` });
            }
            return;
          }

          setJudgeProgress(`Menjalankan Test Case #${currentTest}...`);
          
          // Simulasi Random Status
          const rand = Math.random();
          let status = 'Accepted';
          let time = Math.floor(Math.random() * 50) + 10; // 10ms - 60ms
          
          if (rand > 0.85) {
            status = 'Wrong Answer';
          } else if (rand > 0.75) {
            status = 'Time Limit Exceeded';
            time = 2000; // TLE time
          } else {
            passed++;
          }

          currentResults.push({ id: currentTest, status, time: `${time} ms` });
          setTestResults([...currentResults]);
          
          currentTest++;
        }, 500); // 500ms per test case

      }, 1500);
    }, 1000);
  };

  const getStatusColor = (status) => {
    if (status === 'Accepted') return 'var(--success)';
    if (status === 'Wrong Answer') return 'var(--danger)';
    if (status === 'Time Limit Exceeded') return 'var(--warning)';
    return 'var(--text-secondary)';
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">S</div>
          <div className="brand-text text-gradient">ScalaJudge</div>
        </div>
        <nav className="nav-menu">
          <button 
            className={`nav-item ${activeTab === 'problems' && !selectedProblem ? 'active' : ''}`}
            onClick={() => { setActiveTab('problems'); handleBack(); }}
          >
            <CodeIcon />
            Daftar Soal
          </button>
          <button 
            className={`nav-item ${activeTab === 'materials' ? 'active' : ''}`}
            onClick={() => { setActiveTab('materials'); handleBack(); }}
          >
            <BookIcon />
            Materi Kuliah
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="animate-fade-in">
          {activeTab === 'problems' && !selectedProblem && (
            <div>
              <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Daftar Soal Latihan</h1>
              <p style={{ color: 'var(--text-secondary)' }}>Pilih soal untuk melihat deskripsi, memberikan submission, dan melihat materi referensi.</p>
              
              <div className="problem-grid">
                {problemsData.map(prob => (
                  <div key={prob.id} className="problem-card glass-panel" onClick={() => handleProblemClick(prob)} style={{ cursor: 'pointer' }}>
                    <h3 className="card-title">{prob.title}</h3>
                    <div className="card-meta">
                      <span>⏱️ {prob.timeLimit}</span>
                      <span>💾 {prob.memoryLimit}</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flex: 1 }}>
                      {prob.description.substring(0, 80)}...
                    </p>
                    <button className="btn btn-outline" style={{ marginTop: 'auto' }}>Lihat Soal</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'problems' && selectedProblem && (
            <div className="detail-view">
              <button className="btn btn-outline" onClick={handleBack} style={{ marginBottom: '1.5rem', fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}>
                ← Kembali ke Daftar Soal
              </button>

              <div className="detail-header">
                <h1 className="text-gradient" style={{ fontSize: '2rem' }}>{selectedProblem.title}</h1>
                <div className="card-meta" style={{ marginTop: '0.5rem' }}>
                  <span className="badge">Time limit: {selectedProblem.timeLimit}</span>
                  <span className="badge">Memory limit: {selectedProblem.memoryLimit}</span>
                </div>
              </div>

              <div className="detail-layout">
                {/* Left Column - Problem Statement */}
                <div>
                  <div className="content-section">
                    <h3>Deskripsi Masalah</h3>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{selectedProblem.description}</p>
                  </div>

                  <div className="content-section">
                    <h3>Batasan</h3>
                    <div className="constraint-box">
                      {selectedProblem.constraints}
                    </div>
                  </div>

                  <div className="content-section">
                    <h3>Contoh Masukan</h3>
                    <div className="code-block">{selectedProblem.inputExample}</div>
                  </div>

                  <div className="content-section">
                    <h3>Contoh Keluaran</h3>
                    <div className="code-block">{selectedProblem.outputExample}</div>
                  </div>
                </div>

                {/* Right Column - Sidebar Info & Upload */}
                <div>
                  <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)', fontSize: '1.1rem' }}>Submit Solusi (Scala)</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                      Penting: File harus berekstensi .scala. Sistem kami menggunakan kompilator Scala versi terbaru (Scala 3).
                    </p>
                    
                    <div className="submission-area">
                      <div className="file-input-wrapper">
                        <button className="btn btn-primary" style={{ position: 'relative', zIndex: 1 }} disabled={isJudging}>
                          {isJudging ? <LoaderIcon /> : <UploadIcon />}
                          {isJudging ? 'Sedang Diproses...' : 'Pilih File .scala'}
                        </button>
                        <input type="file" accept=".scala" onChange={handleFileUpload} disabled={isJudging} />
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Maksimal ukuran file: 1 MB</p>
                    </div>

                    {/* Judgels Simulation UI */}
                    {(isJudging || testResults.length > 0 || submitStatus) && (
                      <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Status Penjurian:</h4>
                        
                        {isJudging && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                            <LoaderIcon /> {judgeProgress}
                          </div>
                        )}

                        {testResults.length > 0 && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '1rem' }}>
                            {testResults.map((tr) => (
                              <div key={tr.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '0.3rem 0.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '4px' }}>
                                <span>Test Case #{tr.id}</span>
                                <div>
                                  <span style={{ color: getStatusColor(tr.status), fontWeight: 'bold', marginRight: '1rem' }}>{tr.status}</span>
                                  <span style={{ color: 'var(--text-secondary)' }}>{tr.time}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {finalScore !== null && (
                          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', margin: '1rem 0', color: finalScore === 100 ? 'var(--success)' : (finalScore > 0 ? 'var(--warning)' : 'var(--danger)') }}>
                            Skor Akhir: {finalScore} / 100
                          </div>
                        )}

                        {submitStatus && (
                          <div style={{
                            padding: '1rem',
                            borderRadius: 'var(--border-radius-sm)',
                            backgroundColor: submitStatus.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : (submitStatus.type === 'warning' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)'),
                            borderLeft: `4px solid var(--${submitStatus.type === 'success' ? 'success' : (submitStatus.type === 'warning' ? 'warning' : 'danger')})`,
                            fontSize: '0.85rem',
                            color: submitStatus.type === 'success' ? 'var(--success)' : (submitStatus.type === 'warning' ? 'var(--warning)' : 'var(--danger)')
                          }}>
                            {submitStatus.message}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--accent-secondary)', fontSize: '1.1rem' }}>Referensi Pendukung</h3>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Materi Kuliah Terkait:</h4>
                      {selectedProblem.referenceMaterials.map((mat, idx) => (
                        <div key={idx} className="reference-card" style={{ marginTop: '0.5rem', marginBottom: 0, padding: '0.75rem' }}>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{mat.name}</span>
                          <a href={`${import.meta.env.BASE_URL}materials/${encodeURIComponent(mat.name)}`} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem' }}>
                            Buka Dokumen PDF <ExternalLinkIcon />
                          </a>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Dokumentasi Resmi:</h4>
                      <div className="reference-card" style={{ marginTop: '0.5rem', marginBottom: 0, padding: '0.75rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Scala Language Docs</span>
                        <a href="https://docs.scala-lang.org/" target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem' }}>
                          docs.scala-lang.org <ExternalLinkIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'materials' && (
            <div>
              <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Materi Kuliah UAS</h1>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Daftar semua materi referensi pemrograman Scala untuk persiapan UAS.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {allMaterials.map((mat, idx) => (
                  <div key={idx} className="glass-panel" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ padding: '0.5rem', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', borderRadius: 'var(--border-radius-sm)' }}>
                        <BookIcon />
                      </div>
                      <span style={{ fontWeight: 500 }}>{mat}</span>
                    </div>
                    <a href={`${import.meta.env.BASE_URL}materials/${encodeURIComponent(mat)}`} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>Buka PDF</a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
