# frozen_string_literal: true

# A post's cover is already shown in the page header. When the body opens with
# that same image, drop the repeat so the reader reaches the text sooner. The
# figure's caption and alt text move to the header (page.cover_caption,
# page.cover_alt). A cover that appears later in the body is left in place.
module Zaryob
  module LeadCover
    LEAD_TEXT_LIMIT = 400
    FIGURE = %r{<figure\b[^>]*>.*?</figure>|<p>\s*<img\b[^>]*>\s*</p>}m.freeze

    def self.apply(post)
      cover = post.data["cover_image"] || post.data["image"]
      return unless cover.is_a?(String) && !cover.empty?

      name = File.basename(cover)
      html = post.content.to_s
      match = FIGURE.match(html)
      return unless match && match[0] =~ %r{src="[^"]*/#{Regexp.escape(name)}"}

      before = match.pre_match.gsub(/<[^>]+>/, "").strip
      return if before.length > LEAD_TEXT_LIMIT

      caption = match[0][%r{<figcaption\b[^>]*>(.*?)</figcaption>}m, 1]
      alt = match[0][/\balt="([^"]*)"/, 1]
      post.data["cover_caption"] ||= caption.strip if caption && !caption.strip.empty?
      post.data["cover_alt"] ||= alt if alt && !alt.empty?
      post.content = match.pre_match + match.post_match.sub(/\A\s+/, "")
    end
  end
end

Jekyll::Hooks.register :posts, :post_convert do |post|
  Zaryob::LeadCover.apply(post)
end
