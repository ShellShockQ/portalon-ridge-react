import galleryPad from "../assets/gallery-pad.jpg";
import galleryAerial from "../assets/gallery-aerial.jpg";
import galleryAccess from "../assets/gallery-access.jpg";
import galleryForest from "../assets/gallery-forest.jpg";
import galleryEntrance from "../assets/gallery-entrance.jpg";
import { galleryPhotos, galleryNote, type GalleryPhoto } from "../data/content";

// Maps the filename referenced in content.ts to its actual bundled asset,
// so content.ts can stay plain data with no import statements of its own.
const imageMap: Record<string, string> = {
  "gallery-pad.jpg": galleryPad,
  "gallery-aerial.jpg": galleryAerial,
  "gallery-access.jpg": galleryAccess,
  "gallery-forest.jpg": galleryForest,
  "gallery-entrance.jpg": galleryEntrance,
};

function Photo({ photo }: { photo: GalleryPhoto }) {
  return (
    <figure className={photo.tall ? "tall" : undefined}>
      <img src={imageMap[photo.src]} alt={photo.alt} />
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

export function PhotoGallery() {
  return (
    <section id="photos">
      <div className="wrap">
        <div className="section-head">
          <h2>The site today</h2>
          <span className="section-num mono">00 / CURRENT CONDITION</span>
        </div>
        <div className="gallery-grid">
          {galleryPhotos.map((photo) => (
            <Photo key={photo.src} photo={photo} />
          ))}
        </div>
        <p className="returns-footnote" style={{ marginTop: 14 }}>
          {galleryNote}
        </p>
      </div>
    </section>
  );
}
