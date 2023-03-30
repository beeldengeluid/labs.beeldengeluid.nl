<template>
  <v-row>
    <v-col>
      <!-- Datasets / Visualization -->
      <v-row class="justify-center white">
        <v-col class="pa-0">
          <VisualMain :datasets="datasetPagesExtended" />
        </v-col>
      </v-row>

      <!-- Labs -->
      <v-row class="justify-center light-background my-3 pb-3">
        <v-col class="limit-width px-3 py-4 mb-2">
          <SectionHeading
            :title="$t('labs')"
            :description="$t('labs_description')"
            data-class="lab"
            :action-path="'labs'"
            :action-title="$t('all_labs')"
          />

          <CardGrid
            :cards="labs"
            path="labs-slug"
            data-class="lab"
            row-class="justify-center justify-md-start px-5"
          />
        </v-col>
      </v-row>

      <!-- Projects -->
      <v-row class="justify-center light-background my-3 pb-3">
        <v-col class="limit-width px-3 py-4 mb-2">
          <SectionHeading
            :title="$t('projects')"
            :description="$t('projects_description')"
            data-class="project"
            :action-path="'projects'"
            :action-title="$t('all_projects')"
          />

          <CardGrid
            :cards="projects"
            path="projects-slug"
            data-class="project"
            row-class="justify-center justify-md-start px-5"
          />
        </v-col>
      </v-row>

      <!-- Blogs -->
      <v-row class="justify-center light-background pb-3">
        <v-col class="limit-width px-3 py-3 mb-2">
          <SectionHeading
            :title="$t('blogs')"
            :description="$t('blogs_description')"
            data-class="blog"
            :action-path="'blogs'"
            :action-title="$t('all_blogs')"
          />
          <CardGrid
            :cards="blogs"
            path="blogs-slug"
            data-class="blog"
            row-class="justify-center justify-md-start px-5"
          />
        </v-col>
      </v-row>

      <!-- About -->
      <v-row class="justify-center light-background my-3 pb-3">
        <v-col class="limit-width mb-4">
          <SectionHeading
            :title="$t('about')"
            :description="$t('about_description')"
          />

          <v-row class="white mx-4 my-6 flex-column flex-md-row">
            <v-col md="6" class="px-0 py-0">
              <v-img
                max-height="400"
                max-width="100%"
                width="100%"
                src="~/assets/images/about.jpg"
                class="float-right"
                gradient="to top right, rgba(0,138,219,0.85), rgba(0,138,219,0.2)"
              ></v-img>
            </v-col>
            <v-col
              md="6"
              class="pa-10 d-flex flex-column justify-center align-start"
            >
              <ContentRenderer :value="aboutPage" :excerpt="true" />
              <v-btn color="primary" :to="localePath('about')" nuxt>
                {{ $t("read_more") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- -->
    </v-col>
  </v-row>
</template>

<script setup>
import { enrichDatasets, extendDatasetPagesWithDatasets } from "~/util/dataset";

// datasets
const { data: datasetPages } = await useAsyncData("get-dataset-pages", () =>
  queryContent("datasets")
    .where({ hidden: { $ne: true } })
    .sort("size", "desc")
    .find()
);

const { data: datacatalogRaw } = await useAsyncData("get-dataset-catalog", () =>
  queryContent("/")
    .where({ _path: "/datacatalog0001" })
    .findOne()
);

const datacatalog = datacatalogRaw["_value"]["@graph"];
const datasetsRaw = datacatalogRaw["_value"]["@graph"].filter(
  (node) => node["@type"] === "sdo:Dataset"
);
// enrich datasets with helper properties
const datasetsEnriched = enrichDatasets(datasetsRaw, datacatalog);
const datasetPagesExtended = extendDatasetPagesWithDatasets(
  datasetPages,
  datasetsEnriched
);

// labs
const { data: labs } = await useAsyncData("get-labs", () =>
  queryContent("labs")
    .where({ hidden: { $ne: true } })
    .sort("sortOrder", "asc")
    .sort("startDate", "asc")
    .sort("createdAt", "asc")
    .find()
);

// projects
const { data: projects } = await useAsyncData("get-projects", () =>
  queryContent("projects")
    .where({ hidden: { $ne: true } })
    .sort("sortOrder", "asc")
    .sort("startDate", "asc")
    .sort("createdAt", "asc")
    .limit(4)
    .find()
);

// blogs
const { data: blogs } = await useAsyncData("get-blogs", () =>
  queryContent("blogs")
    .where({ hidden: { $ne: true } })
    .sort("createdAt", "asc")
    .limit(4)
    .find()
);

// data
const { data: aboutPage } = await useAsyncData("get-about", () =>
  queryContent()
    .where({ title: "About" })
    .findOne()
);

// const blogs = await $content(blogsPath)
//   .where({ hidden: { $ne: true } })
//   .sortBy("createdAt", "asc")
//   .limit(4)
//   .fetch();
</script>

<script>
// import { getLocalePath } from "~/util/contentFallback";
// import icons from "~/config/icons";
// import { classColors } from "~/config/theme";
// import { enrichDatasets, extendDatasetPagesWithDatasets } from "~/util/dataset";

export default {
  // const { data } = await useAsyncData('get-document', () => queryContent('about').findOne())
  // console.log("data", data);

  async asyncData({ $content, app }) {
    // const { data: aboutPage } = await useAsyncData("about", () =>
    //   queryContent("blog").find()
    // );
    // const { data: aboutPage } = await useAsyncData("about-page", () =>
    //   queryContent("/about")
    //     // .only(["title"])
    //     .findOne()
    // );
    // console.log("aboutPage", aboutPage);

    // const aboutPath = await getLocalePath({ $content, app, path: "about" });
    // const aboutPage = await $content(aboutPath).fetch();

    // // blogs
    // const blogsPath = await getLocalePath({
    //   $content,
    //   app,
    //   path: "blogs",
    // });
    // const blogs = await $content(blogsPath)
    //   .where({ hidden: { $ne: true } })
    //   .sortBy("createdAt", "asc")
    //   .limit(4)
    //   .fetch();

    // // labs
    // const labsPath = await getLocalePath({
    //   $content,
    //   app,
    //   path: "labs",
    // });
    // const labs = await $content(labsPath)
    //   .where({ hidden: { $ne: true } })
    //   .sortBy("sortOrder", "asc")
    //   .sortBy("startDate", "asc")
    //   .sortBy("createdAt", "asc")
    //   .limit(4)
    //   .fetch();

    // // projects
    // const projectsPath = await getLocalePath({
    //   $content,
    //   app,
    //   path: "projects",
    // });
    // const projects = await $content(projectsPath)
    //   .where({ hidden: { $ne: true } })
    //   .sortBy("sortOrder", "asc")
    //   .sortBy("startDate", "asc")
    //   .sortBy("createdAt", "asc")
    //   .limit(4)
    //   .fetch();

    // // datasets
    // // Custom markdown content for datasets
    // const mdPath = await getLocalePath({
    //   $content,
    //   app,
    //   path: "datasets",
    // });
    // let datasetPages = await $content(mdPath)
    //   .where({ hidden: { $ne: true } })
    //   .sortBy("size", "desc")
    //   .fetch()
    //   .catch((e) => {
    //     // ignore error of missing page
    //   });

    // // datasets from Datacatalog are not localized (yet)
    // const dataPath = "datacatalog0001";
    // const data = await $content(dataPath).fetch();
    // const datacatalog = data["@graph"];
    // const datasetsRaw = data["@graph"].filter(
    //   (node) => node["@type"] === "sdo:Dataset"
    // );
    // // enrich datasets with helper properties
    // const datasets = enrichDatasets(datasetsRaw, datacatalog);
    // datasetPages = extendDatasetPagesWithDatasets(datasetPages, datasets);

    return {
      // aboutPage,
      // datasetPages,
      // blogs,
      // labs,
      // projects,
    };
  },
  // data: () => ({
  //   icons,
  //   classColors,
  // }),
  // head() {
  //   const title = this.$t("home");
  //   return {
  //     title,
  //   };
  // },
};
</script>
