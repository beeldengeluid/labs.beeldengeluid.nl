// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@nuxt/content"],
  // Global CSS (https://nuxt.com/docs/api/configuration/nuxt-config#css)
  css: [
    "vuetify/lib/styles/main.sass",
    "@/assets/scss/vuetify/variables.scss",
    "@/assets/scss/vuetify/customizations.scss",
    "@/assets/scss/layout/index.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          site_name: "Sound & Vision · Labs",
          site_author: "The Netherlands Institute for Sound & Vision",
          dataset: "Dataset",
          datasets: "Datasets",
          all_datasets: "All datasets",
          project: "Project",
          projects: "Projects",
          projects_description: "Open data powered showcases",
          all_projects: "All projects",
          blog: "Blog",
          blogs: "Blog",
          blogs_description: "Latest news and background articles",
          all_blogs: "All articles",
          topic: "Topic",
          topics: "Topics",
          lab: "Lab",
          labs: "Labs",
          labs_description: "Our Research & Innovation activities",
          all_labs: "All labs",
          api: "API",
          apis: "APIs",
          archive: "Archive",
          archives: "Archive",
          records: "Records",
          home: "Home",
          about: "About",
          about_description: "Who we are, what we do",
          last_update: "Last update",
          read_more: "Read more",
          metadata: "Metadata",
          download_metadata: "JSON-LD",
          explore_dataset: "Explore dataset",
          intro_title: "Welcome to Sound & Vision Labs!",
          intro_text:
            "Here we offer you information, projects and the latest articles about the research and innovation activities at Sound & Vision.",
        },
        nl: {
          site_name: "Beeld & Geluid · Labs",
          site_author: "Nederlands Instituut voor Beeld & Geluid",
          blogs: "Artikelen",
          all_blogs: "Alle artikelen",
          blogs_description: "Het laatste niews en achtergrondinformatie",
          datasets: "Datasets",
          all_datasets: "Alle datasets",
          projects: "Projecten",
          all_projects: "Alle projecten",
          topic: "Onderwerp",
          topics: "Onderwerpen",
          labs_description: "Onze Onderzoek & Innovatie activiteiten",
          all_labs: "Alle labs",
          archive: "Archief",
          records: "Objecten",
          about: "Over ons",
          about_description: "Wie we zijn, what we doen",
          last_update: "Laatste wijziging",
          read_more: "Lees meer",
          explore_dataset: "Dataset verkennen",
        },
      },
    },
  },
});
