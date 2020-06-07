import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About The Grizzled Porgy</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About The Grizzled Porgy</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
              Hello and welcome!
              </p>
              <p><strong>
              The entire premise behind this website was to build something forward thinking. Recipes top of page. No annoying advertisements. No personal history (unlike here), just simple food recipes without distraction.
              </strong>
              </p>
              <p>
              My name is Paul VanHevel and The Grizzled Porgy… and the Slanky Spoon is a passion project of mine. I’m an SEO (Search Engine Optimization) Strategist in Brooklyn, New York with a love for food. Blah, blah, blah...
              </p>
              <p>
              The chefs and homecooks featured on this blog are mainly my Father, John VanHevel, co-workers and friends for whom I’m grateful. They provide me with photos of their food, which I try and showcase to a broader audience.
              </p>
              <p>
              My hope and long term goal is to provide a ranking alternative to the lengthy narratives, food histories or “what this recipe means to me” style of food blogging that is often required to rank well in search engines for “recipe” related queries.
              </p>
              <p>
              Instead, I’m hoping a recipe forward website, a clean presentation and a super fast experience, constructed by my partner, Mary Ellis is something that will one day grow and potentially change how food blogging is done. <strong>This is an experiment to see how that might unfold.</strong>
              </p>
              <p>
              Sincerely,
              </p>
              <p>
              <i>Paul VanHevel</i>
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
