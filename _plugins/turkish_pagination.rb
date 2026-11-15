# frozen_string_literal: true

# jekyll-paginate leaves out posts whose front matter says `hidden: true`.
# English editions have their own list at /en/posts/, so mark them hidden
# before pagination runs; /posts/pageN/ then counts the Turkish posts only.
module Zaryob
  class HideEnglishFromPagination < Jekyll::Generator
    safe true
    priority :highest

    def generate(site)
      site.posts.docs.each do |post|
        post.data["hidden"] = true if post.data["lang"] == "en"
      end
    end
  end
end
