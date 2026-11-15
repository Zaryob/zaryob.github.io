# frozen_string_literal: true

# Posts used to live at /:categories/:title/ and a few English section pages
# had Turkish slugs. Their old addresses stay alive as small redirect pages:
#   _data/legacy_post_urls.json  post source path => old address (frozen list)
#   _data/legacy_page_urls.yml   old address => new address
module Zaryob
  class LegacyRedirectPage < Jekyll::PageWithoutAFile
    def initialize(site, from, to)
      super(site, site.source, from.sub(%r{^/}, ""), "index.html")
      target = "#{site.config['url']}#{site.config['baseurl']}#{to}"
      escaped = target.gsub("&", "&amp;").gsub('"', "&quot;").gsub("<", "&lt;")
      self.data = { "layout" => nil, "sitemap" => false, "redirect_to" => to }
      self.content = <<~HTML
        <!doctype html>
        <html lang="tr">
        <head>
        <meta charset="utf-8">
        <title>Yönlendiriliyor… / Redirecting…</title>
        <link rel="canonical" href="#{escaped}">
        <meta http-equiv="refresh" content="0; url=#{escaped}">
        <meta name="robots" content="noindex">
        <script>location.replace(#{target.to_json} + location.search + location.hash);</script>
        </head>
        <body>
        <p>Bu sayfa taşındı / This page has moved: <a href="#{escaped}">#{escaped}</a></p>
        </body>
        </html>
      HTML
    end
  end

  class LegacyRedirects < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      pairs = {}
      posts = site.posts.docs.to_h { |doc| [doc.relative_path, doc.url] }
      (site.data["legacy_post_urls"] || {}).each do |path, old|
        raise "legacy_post_urls.json names a missing post: #{path}" unless posts.key?(path)

        pairs[old] = posts[path]
      end
      (site.data["legacy_page_urls"] || {}).each { |old, to| pairs[old] = to }
      taken = (site.pages.map(&:url) + site.posts.docs.map(&:url)).to_set
      pairs.each do |old, to|
        next if old == to
        raise "Legacy address #{old} is in use by a real page" if taken.include?(old)

        site.pages << LegacyRedirectPage.new(site, old, to)
      end
    end
  end
end
