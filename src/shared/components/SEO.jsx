import { Helmet } from "react-helmet-async"

const baseUrl = import.meta.env.VITE_SITE_URL

const SEO = ({ title, description, path = "/" }) => {
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
    </Helmet>
  )
}

export default SEO;