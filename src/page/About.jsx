export default function Bio() {
   return (
      <section className="about" id="about">
         <div className="about-container">
            <h3 className="about-title">À propos</h3>
            <div className="about-content">
               <p className="about-texte">
                  Passionné de technologie depuis longtemps, je suis constamment
                  en quête de nouvelles avancées et tendances dans le domaine du
                  développement web.
                  <br />
                  Mon intérêt pour la technologie me pousse à rester à jour avec
                  les dernières innovations, ce qui me permet de créer des
                  solutions web modernes et efficaces.
                  <br />
                  J'associe mes connaisances de programmation et de construction
                  pour pouvoir travailler sur des projets de plus grande
                  envergure qui mêlent développement et construction.
               </p>
               <div className="about-circle"></div>
            </div>

            {/* <div className="about-icon">Icon</div> */}
         </div>
      </section>
   );
}
