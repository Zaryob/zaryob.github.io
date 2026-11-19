# frozen_string_literal: true

module Zaryob
  class HomePicks < Jekyll::Generator
    safe true

    def generate(site)
      documents = site.posts.docs + site.pages
      editions = documents.group_by { |document| document.data["translation_key"] || document.url }
      nominated = editions.values.select { |group| group.any? { |document| nominated?(document) } }
      supplemental = site.data.fetch("home_picks", [])

      site.data["home_pick_pool"] = %w[tr en].to_h do |language|
        picks = supplemental.filter_map { |entry| supplemental_pick(entry, language) }
        picks.concat(nominated.filter_map { |group| document_pick(group, language, site.config["lang"]) })
        [language, picks.uniq { |pick| pick.fetch("url") }]
      end
    end

    private

    def nominated?(document)
      metadata = document.data["home_pick"]
      metadata == true || metadata.is_a?(Hash)
    end

    def document_language(document, default_language)
      (document.data["lang"] || default_language || "tr").split("-").first
    end

    def document_pick(group, language, default_language)
      document = group.find { |edition| document_language(edition, default_language) == language }
      return unless document

      metadata = document.data["home_pick"]
      metadata = {} unless metadata.is_a?(Hash)
      title = metadata.fetch("title", document.data["title"]).to_s.strip
      return if title.empty?

      {
        "title" => title,
        "summary" => metadata.fetch("summary", document.data["description"]),
        "url" => document.url,
        "type" => document.is_a?(Jekyll::Document) ? "post" : "page",
      }
    end

    def supplemental_pick(entry, language)
      copy = entry[language]
      return unless copy

      copy.merge(
        "type" => entry.fetch("type"),
        "suite" => entry["suite"],
      )
    end
  end
end
