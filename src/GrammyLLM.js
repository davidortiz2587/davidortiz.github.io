import React from 'react';
import './App.css';

export default function GrammyLLM() {
  return (
    <div className="about-content">
      <div className="about-header">
        <h1 className="about-title">Grammy LLM</h1>
        <div className="title-underline"></div>
      </div>

      <div className="intro-card">
        <h2 className="intro-heading">Grammy LLM</h2>
        <div className="intro-text">
          <p>
            This project is a custom LLM that I created using the Google Generative AI API. I first scraped the Grammy Song Winners Wikipedia page to get a list of all the winners and their respective years.
            Then, I used other API calls from websites such as Spotify and LastFM to get other data such as album names, song popularity, artist popularity, and previous Grammy wins.
            The goal was to train this LLM on all of this data to see what kind of metrics previous Grammy winning songs have in common, to then try and predict the 2026 winner based on the nominees' data.
          </p>
          <p>
            Below, you can see a (now stylized) text file that the LLM printed out when I trained it based on custom prompts and CSV files of all of the data that I extracted and pulled from the various APIs.
            Check out the <a href="https://github.com/davidortiz2587/grammy-llm" target="_blank" rel="noopener noreferrer">GitHub repository</a> to see how I built this project from scratch!
          </p>
        </div>
      </div>
      <div className="grammy-llm-prediction">
        <h2 className="prediction-title">Grammy Song of the Year 2026 - Prediction</h2>
        <hr className="prediction-divider" />
        <p className="prediction-intro">
          As a Grammy Awards expert, I've analyzed the 2026 Song of the Year nominations with a keen eye on historical patterns, industry trends, and the specific metrics provided. Song of the Year is distinct from Record of the Year, emphasizing the <strong>songwriting</strong> craft—lyrics, melody, and composition—over performance or production.
        </p>
        <h3 className="nominees-title">2026 Song of the Year Nominees Analysis</h3>
        <div className="nominees-list">
          {/* Nominee 1 */}
          <div className="nominee-card">
            <h4>1. Abracadabra - Lady Gaga</h4>
            <ul>
              <li><strong>Artist Profile:</strong> Lady Gaga is a multi-Grammy winner and a global superstar known for her artistic versatility and impactful songwriting. She's a proven Grammy darling.</li>
              <li><strong>Metrics Alignment:</strong>
                <ul>
                  <li>Popularity: 81.0 (Above historical average of 64.8)</li>
                  <li>Duration: 223.4s (Close to historical average of 240.4s)</li>
                  <li>Artist Followers: 42,672,317 (Well above historical average of 15,905,975)</li>
                </ul>
              </li>
              <li><strong>Key Strengths:</strong> Established, respected artist with a strong Grammy history. Metrics are very solid across the board, particularly artist followers. Gaga often delivers powerful, well-crafted songs that resonate.</li>
              <li><strong>Potential Weaknesses:</strong> Depends heavily on the actual song's impact and unique narrative. She faces extremely strong competition from artists who have recently dominated SOTY or have immense cultural momentum. Could be perceived as "another great Gaga song" rather than a defining SOTY moment.</li>
              <li><strong>Alignment with Historical Patterns:</strong> Strong alignment. Fits the profile of an established artist with strong commercial and critical backing.</li>
            </ul>
          </div>
          {/* Nominee 2 */}
          <div className="nominee-card">
            <h4>2. Anxiety - Doechii</h4>
            <ul>
              <li><strong>Artist Profile:</strong> Doechii is a rising star known for her unique style and critically acclaimed work. This could represent a breakthrough moment.</li>
              <li><strong>Metrics Alignment:</strong>
                <ul>
                  <li>Popularity: 79.0 (Well above historical average)</li>
                  <li>Duration: 249.3s (Slightly above historical average)</li>
                  <li>Artist Followers: 3,246,734 (Significantly below historical average of 15,905,975)</li>
                </ul>
              </li>
              <li><strong>Key Strengths:</strong> Strong popularity and song duration. The title "Anxiety" suggests a timely and relatable theme, which can be compelling for SOTY voters. Doechii's artistry is distinct.</li>
              <li><strong>Potential Weaknesses:</strong> The most significant weakness is the comparatively low artist follower count. Song of the Year, while sometimes recognizing breakthroughs, often goes to more established artists or those with truly undeniable, pervasive cultural moments.</li>
              <li><strong>Alignment with Historical Patterns:</strong> Good on popularity and theme, but significantly weak on artist recognition/followers for a SOTY winner.</li>
            </ul>
          </div>
          {/* Nominee 3 */}
          <div className="nominee-card">
            <h4>3. Apt. - Rosé & Bruno Mars</h4>
            <ul>
              <li><strong>Artist Profile:</strong> A powerful collaboration between Rosé of BLACKPINK and Bruno Mars, a Grammy darling and multiple SOTY winner.</li>
              <li><strong>Metrics Alignment:</strong>
                <ul>
                  <li>Popularity: 88.0 (Excellent, well above historical average)</li>
                  <li>Duration: 169.9s (Significantly below historical average of 240.4s)</li>
                  <li>Artist Followers: 13,467,738 (Below average for recent SOTY winners)</li>
                </ul>
              </li>
              <li><strong>Key Strengths:</strong> Bruno Mars' impeccable SOTY track record and songwriting prowess. Rosé brings immense global commercial power and fan engagement. The collaboration itself is a cultural event. Very high popularity.</li>
              <li><strong>Potential Weaknesses:</strong> The song duration is quite short for a SOTY winner. While followers are decent, Mars' individual followers are much higher, so this metric might be slightly skewed for the 'duo' entry.</li>
              <li><strong>Alignment with Historical Patterns:</strong> Strong due to Bruno Mars' influence, but the short duration is a slight outlier.</li>
            </ul>
          </div>
          {/* Nominee 4 */}
          <div className="nominee-card">
            <h4>4. DTMF - Bad Bunny</h4>
            <ul>
              <li><strong>Artist Profile:</strong> A global superstar and one of the most commercially successful artists in the world, Bad Bunny has significant Grammy recognition in Latin categories.</li>
              <li><strong>Metrics Alignment:</strong>
                <ul>
                  <li>Popularity: 91.0 (Exceptional, far above historical average)</li>
                  <li>Duration: 237.1s (Very close to historical average)</li>
                  <li>Artist Followers: 103,333,085 (Outstanding, among the highest ever for a nominee)</li>
                </ul>
              </li>
              <li><strong>Key Strengths:</strong> Unparalleled commercial success and cultural impact. Metrics are fantastic across the board, easily surpassing historical averages. Bad Bunny is a global phenomenon.</li>
              <li><strong>Potential Weaknesses:</strong> Song of the Year, despite Bad Bunny's global dominance, has historically leaned heavily towards English-language songs, or songs with profound lyrical narratives that broadly resonate with the Recording Academy.</li>
              <li><strong>Alignment with Historical Patterns:</strong> Excellent on numbers and commercial impact, but there might be an inherent language/cultural barrier for SOTY.</li>
            </ul>
          </div>
          {/* Nominee 5 */}
          <div className="nominee-card">
            <h4>5. Golden - Huntr/x : Ejae, Audrey Nuna & Rei Ami</h4>
            <ul>
              <li><strong>Artist Profile:</strong> This appears to be a collaboration of less established artists, given the low combined follower count.</li>
              <li><strong>Metrics Alignment:</strong>
                <ul>
                  <li>Popularity: 99.0 (Extremely high, an outlier)</li>
                  <li>Duration: 194.6s (Below historical average)</li>
                  <li>Artist Followers: 3,855,497 (Significantly below historical average)</li>
                </ul>
              </li>
              <li><strong>Key Strengths:</strong> Unprecedented popularity score, indicating a massive commercial or viral hit.</li>
              <li><strong>Potential Weaknesses:</strong> The extremely low artist follower count is a major red flag for Song of the Year. SOTY is rarely awarded to artists who are not widely recognized or established in the industry, even if their song is a huge viral sensation.</li>
              <li><strong>Alignment with Historical Patterns:</strong> Very weak on artist followers, despite outlier popularity.</li>
            </ul>
          </div>
          {/* Nominee 6 */}
          <div className="nominee-card">
            <h4>6. Luther - Kendrick Lamar & SZA</h4>
            <ul>
              <li><strong>Artist Profile:</strong> Kendrick Lamar is a multiple Grammy winner and just won SOTY for "Not Like Us" (2025). SZA is a critically acclaimed, multi-Grammy winning artist.</li>
              <li><strong>Metrics Alignment:</strong>
                <ul>
                  <li>Popularity: 84.0 (Excellent, well above historical average)</li>
                  <li>Duration: 177.6s (Below historical average)</li>
                  <li>Artist Followers: 44,884,290 (Excellent, far above historical average)</li>
                </ul>
              </li>
              <li><strong>Key Strengths:</strong> Both artists are Grammy darlings known for their profound lyrical depth and artistic integrity. Kendrick's recent SOTY win shows the Academy's receptiveness to his impactful songwriting. SZA adds another layer of critical and commercial appeal.</li>
              <li><strong>Potential Weaknesses:</strong> The duration is somewhat short. While Kendrick just won, voters might look for something different, though "Not Like Us" was unique.</li>
              <li><strong>Alignment with Historical Patterns:</strong> Very strong alignment, especially with Kendrick's recent SOTY victory and both artists' critical acclaim.</li>
            </ul>
          </div>
          {/* Nominee 7 */}
          <div className="nominee-card">
            <h4>7. Manchild - Sabrina Carpenter</h4>
            <ul>
              <li><strong>Artist Profile:</strong> Sabrina Carpenter has experienced a massive breakthrough year, achieving widespread commercial success and critical attention.</li>
              <li><strong>Metrics Alignment:</strong>
                <ul>
                  <li>Popularity: 88.0 (Excellent, well above historical average)</li>
                  <li>Duration: 213.6s (Close to historical average)</li>
                  <li>Artist Followers: 27,001,257 (Excellent, well above historical average)</li>
                </ul>
              </li>
              <li><strong>Key Strengths:</strong> Tremendous current momentum and commercial success. All metrics are strong and align well with historical winners.</li>
              <li><strong>Potential Weaknesses:</strong> While she's had a huge year, she's still relatively new to the "Grammy darling" status for Big Four categories compared to some rivals.</li>
              <li><strong>Alignment with Historical Patterns:</strong> Good alignment in terms of metrics and commercial success, but slightly less established than some rivals.</li>
            </ul>
          </div>
          {/* Nominee 8 */}
          <div className="nominee-card">
            <h4>8. Wildflower - Billie Eilish</h4>
            <ul>
              <li><strong>Artist Profile:</strong> Billie Eilish and Finneas are arguably the most successful songwriting duo in recent Grammy history, having won Song of the Year twice.</li>
              <li><strong>Metrics Alignment:</strong>
                <ul>
                  <li>Popularity: 92.0 (Exceptional, far above historical average)</li>
                  <li>Duration: 261.5s (Above historical average)</li>
                  <li>Artist Followers: 119,407,369 (Outstanding, highest among nominees)</li>
                </ul>
              </li>
              <li><strong>Key Strengths:</strong> Unrivaled SOTY track record for Billie Eilish/Finneas. All metrics are phenomenal, surpassing historical averages and leading the pack in this category.</li>
              <li><strong>Potential Weaknesses:</strong> The only conceivable weakness is "Grammy fatigue," but Billie Eilish has already demonstrated she can overcome this, winning SOTY twice within a few years.</li>
              <li><strong>Alignment with Historical Patterns:</strong> Exceptionally strong alignment. She perfectly fits the profile of a multiple SOTY winner.</li>
            </ul>
          </div>
        </div>
        <hr className="prediction-divider" />
        <h3 className="final-prediction-title">Final Prediction</h3>
        <div className="final-prediction">
          <p><strong>Predicted Winner:</strong> <span className="winner-name">Wildflower - Billie Eilish</span></p>
          <p><strong>Confidence Level:</strong> 85%</p>
          <p>
            Billie Eilish and Finneas O'Connell are currently the most formidable songwriting force in the Grammy landscape, having already secured two Song of the Year wins. "Wildflower" presents an almost perfect alignment with what the Recording Academy historically rewards for this category.
          </p>
          <ul>
            <li><strong>Unmatched SOTY Track Record:</strong> Billie Eilish and Finneas have proven their ability to craft songs that resonate deeply with the Academy.</li>
            <li><strong>Exceptional Metrics:</strong> "Wildflower" boasts the highest Spotify Popularity (92.0) and Artist Followers (119M) among all nominees.</li>
            <li><strong>Artistic Merit and Cultural Resonance:</strong> Billie Eilish's music consistently delivers introspective, unique, and profoundly relatable themes delivered with exquisite lyrical and melodic craftsmanship.</li>
            <li><strong>Minimizing Weaknesses:</strong> While "Grammy fatigue" could theoretically be a factor, Eilish's recent win for "What Was I Made For?" demonstrated that the Academy will continue to reward genuine artistic excellence regardless of prior wins.</li>
          </ul>
          <p>
            While "Luther" by Kendrick Lamar & SZA is a very strong contender, and "Apt." brings Bruno Mars' SOTY magic and global appeal, "Wildflower" stands out as the most complete package.
          </p>
        </div>
        <hr className="prediction-divider" />
        <h3 className="ranking-title">Ranking All 8 Nominees (Most to Least Likely to Win)</h3>
        <ol className="nominee-ranking">
          <li><strong>Wildflower - Billie Eilish:</strong> Unrivaled SOTY track record, exceptional metrics, undeniable artistic credibility. The most complete package.</li>
          <li><strong>Luther - Kendrick Lamar & SZA:</strong> A dream team of Grammy darlings known for profound lyricism. Kendrick's recent SOTY win gives this significant weight.</li>
          <li><strong>Apt. - Rosé & Bruno Mars:</strong> Bruno Mars is an SOTY veteran, and Rosé brings immense global commercial power. High popularity, though slightly shorter duration might be a minor factor.</li>
          <li><strong>Manchild - Sabrina Carpenter:</strong> Represents a significant breakthrough moment with excellent metrics and strong momentum.</li>
          <li><strong>Abracadabra - Lady Gaga:</strong> A respected legend with strong metrics. Capable of delivering a SOTY-worthy song, but faces stiff competition.</li>
          <li><strong>DTMF - Bad Bunny:</strong> Unparalleled commercial success and global impact, with fantastic metrics. However, SOTY has a historical lean towards English-language songs.</li>
          <li><strong>Anxiety - Doechii:</strong> Strong popularity and timely theme, but the significantly lower artist follower count compared to typical SOTY winners suggests a less established artist profile.</li>
          <li><strong>Golden - Huntr/x : Ejae, Audrey Nuna & Rei Ami:</strong> Incredibly high popularity score, but extremely low artist follower count makes this nomination a significant outlier for SOTY.</li>
        </ol>
      </div>
      </div>

  );
}
