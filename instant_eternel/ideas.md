# L'Instant Éternel - Brainstorming Design

## Trois approches stylistes

### 1. **Minimalisme Luxe**
Un design épuré et intemporel, avec beaucoup d'espace blanc, typographie élégante et une palette de couleurs neutres (noir, blanc, gris clair). Les images dominent l'écran sans surcharge visuelle.
**Probabilité:** 0.08

### 2. **Romantisme Contemporain**
Un style qui fusionne l'élégance classique avec des touches modernes. Utilise des dégradés subtils, des courbes douces, et une palette de couleurs chaudes (beige, or, rose poudré). Atmosphère intime et poétique.
**Probabilité:** 0.07

### 3. **Dramatique Cinématographique**
Un design audacieux et cinématique avec des contrastes forts, des vidéos en arrière-plan, des typographies imposantes et une palette sombre (noir, blanc, accents dorés). Crée une impression de prestige et d'exclusivité.
**Probabilité:** 0.06

---

## Approche Sélectionnée : **Romantisme Contemporain**

### Design Movement
Fusion du **Modernisme Épuré** avec l'**Esthétique Romantique**. Inspiré par le design haut de gamme des marques de luxe (Chanel, Dior) qui mélangent minimalisme et poésie.

### Core Principles
1. **Élégance Intemporelle** : Chaque élément doit respirer la sophistication sans être ostentatoire.
2. **Narration Visuelle** : Les images racontent l'histoire, le design les accompagne discrètement.
3. **Espace Respirant** : L'absence d'éléments est aussi importante que leur présence.
4. **Subtilité Émotionnelle** : Les couleurs et les mouvements évoquent des sentiments sans crier.

### Color Philosophy
- **Couleur Principale** : Beige Chaud (`#E8DCC8`) - chaleur, intimité, intemporalité
- **Accent Doré** : Or Doux (`#D4A574`) - luxe subtil, romantisme
- **Texte** : Charbon Foncé (`#2C2C2C`) - lisibilité sans dureté
- **Arrière-plan** : Blanc Cassé (`#FAFAF8`) - douceur, légèreté
- **Accent Secondaire** : Rose Poudré (`#D4B5B5`) - tendresse, féminité discrète

**Intention Émotionnelle** : Créer une atmosphère de confiance, d'élégance et de chaleur humaine. Les couleurs évoquent les moments précieux et intemporels.

### Layout Paradigm
- **Asymétrie Intentionnelle** : Les images et le texte ne sont jamais centrés symétriquement. Utiliser des grilles de 3-4 colonnes avec des débordements.
- **Galerie Masonry** : Les photos s'arrangent naturellement, créant un rythme visuel organique.
- **Sections Alternées** : Image à gauche, texte à droite, puis inversé. Crée un mouvement fluide.
- **Espacements Généreux** : Marges larges, padding ample entre les sections.

### Signature Elements
1. **Ligne Dorée Subtile** : Une fine ligne dorée (`1px`) qui sépare les sections, rappelle l'élégance.
2. **Typographie Contrastée** : Titres en serif élégant (Playfair Display), corps en sans-serif épuré (Poppins).
3. **Dégradés Subtils** : Dégradés très légers (beige → blanc) en arrière-plan pour ajouter de la profondeur sans surcharge.

### Interaction Philosophy
- **Hover Doux** : Les images s'agrandissent légèrement (scale 1.02) avec une transition fluide (300ms).
- **Transitions Fluides** : Tous les changements d'état utilisent `ease-out` pour une sensation de contrôle.
- **Feedback Subtil** : Les boutons changent de couleur légèrement, sans animation brutale.
- **Scroll Révélation** : Les éléments apparaissent progressivement au scroll, créant une découverte progressive.

### Animation
- **Durée Standard** : 300-400ms pour les transitions principales.
- **Easing** : `cubic-bezier(0.23, 1, 0.32, 1)` pour les entrées, `cubic-bezier(0.77, 0, 0.175, 1)` pour les mouvements.
- **Fade-in au Scroll** : Les sections apparaissent avec une légère translation vers le haut + fade-in.
- **Image Zoom Hover** : Très subtil (1.02x), pas de distorsion.
- **Pas d'Animation Excessive** : Respecter `prefers-reduced-motion`.

### Typography System
- **Titres** : Playfair Display, 700 (bold), tailles 48px (hero) → 24px (sous-titres)
- **Corps** : Poppins, 400 (regular), 16px pour le texte principal
- **Accents** : Poppins, 500 (medium), 14px pour les labels et CTAs
- **Hiérarchie** : Titres dominants, corps léger, accents discrets

### Brand Essence
**Positionnement** : L'Instant Éternel capture les moments précieux des mariages avec une approche artistique et intemporelle, pour les couples qui cherchent l'authenticité plutôt que la perfection.

**Personnalité** : Élégant, Authentique, Poétique

### Brand Voice
- **Ton** : Chaleureux, professionnel, légèrement poétique
- **Headlines** : "Chaque instant devient éternité" (au lieu de "Bienvenue")
- **CTAs** : "Découvrez nos histoires" (au lieu de "Commencer")
- **Microcopy** : "Nous capturons l'essence de vos émotions"

### Wordmark & Logo
Un logo minimaliste composé d'une **ligne courbe dorée** qui forme une **spirale délicate**, symbolisant le mouvement, le temps et l'éternité. Accompagné du texte "L'Instant Éternel" en Playfair Display.

### Signature Brand Color
**Or Doux** (`#D4A574`) - C'est la couleur qui sera immédiatement reconnaissable sur le site, utilisée pour les accents, les lignes de séparation et les éléments interactifs.

---

## Résumé Exécution
- Palette : Beige chaud, or doux, rose poudré, blanc cassé, charbon foncé
- Typographie : Playfair Display + Poppins
- Layout : Asymétrique, masonry, espacements généreux
- Interactions : Douces, fluides, subtiles
- Animations : Fade-in au scroll, zoom léger au hover
- Essence : Élégance intemporelle, authenticité, poésie
