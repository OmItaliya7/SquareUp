import { Helmet } from "react-helmet-async"

const baseUrl = import.meta.env.VITE_SITE_URL || "https://square-upp.vercel.app";

const defaultImage = `${baseUrl}/og-image.webp`;

const SEO = ({ title, description, path = "/", image = defaultImage, type = "website" }) => {
  const url = `${baseUrl}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SquareUp" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

    </Helmet>
  )
}

export default SEO;