
import React, { useState } from 'react';
import { Page, Navbar, Footer, GlobalCTA } from './Components';
import { HomePage } from './Home';
import { SolutionsPage } from './Solutions';
import { BoonScalePage } from './Scale';
import { BoonGrowPage } from './Grow';
import { BoonExecPage } from './Exec';
import { BoonTogetherPage } from './Together';
import { WhyBoonPage } from './WhyBoon';
import { StoryPage } from './Story';
import { ForCoachesPage } from './Coaches';
import { ForIndividualsPage } from './Individuals';
import { LearnPage, BlogPage, LivePage, PodcastPage, CaseStudiesPage, ResourcesPage } from './Learn';
import { DemoPage } from './Demo';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('HOME');

  const handleNav = (p: Page) => {
    setCurrentPage(p);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME': return <HomePage setPage={handleNav} />;
      case 'SOLUTIONS': return <SolutionsPage setPage={handleNav} />;
      case 'SCALE': return <BoonScalePage />;
      case 'GROW': return <BoonGrowPage />;
      case 'EXEC': return <BoonExecPage />;
      case 'TOGETHER': return <BoonTogetherPage />;
      case 'WHY_BOON': return <WhyBoonPage />;
      case 'STORY': return <StoryPage />;
      case 'COACHES': return <ForCoachesPage />;
      case 'INDIVIDUALS': return <ForIndividualsPage />;
      case 'LEARN': return <LearnPage setPage={handleNav} />;
      case 'LEARN_BLOG': return <BlogPage />;
      case 'LEARN_LIVE': return <LivePage />;
      case 'LEARN_PODCAST': return <PodcastPage />;
      case 'LEARN_CASES': return <CaseStudiesPage />;
      case 'LEARN_RESOURCES': return <ResourcesPage />;
      case 'DEMO': return <DemoPage />;
      default: return <HomePage setPage={handleNav} />;
    }
  };

  const pagesWithCustomCTA = ['HOME', 'SOLUTIONS', 'SCALE', 'GROW', 'EXEC', 'TOGETHER', 'WHY_BOON', 'STORY', 'COACHES', 'INDIVIDUALS', 'LEARN_CASES', 'DEMO'];
  const showGlobalCTA = !pagesWithCustomCTA.includes(currentPage);

  return (
    <div className="min-h-screen bg-white text-[#2E353D] selection:bg-[#466FF6] selection:text-white">
      <style>{`
        body { font-family: 'Barlow', sans-serif; overflow-x: hidden; }
        .font-serif { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }
      `}</style>
      
      <Navbar currentPage={currentPage} setPage={handleNav} />
      
      <div className="transition-opacity duration-300">
        {renderPage()}
      </div>

      {showGlobalCTA && <GlobalCTA />}
      <Footer setPage={handleNav} />
    </div>
  );
}
