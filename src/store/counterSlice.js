import { createSlice } from '@reduxjs/toolkit'
const french = {
  lang:"Français",
    home_header:"Les réalisations de la communauté",
    home_title:"Parcourez une collection d'images imaginatives et visuellement époustouflantes générées par OpenAI",
    home_search_label:"Rechercher des images",
    home_search_placeholder:"Rechercher des images",
    header_button:"Créer",
    create_header:"Créer",
    create_title:"Créez des images imaginatives et visuellement époustouflantes via DALLE et partagez-les avec la communauté",
    create_form_name_name:"Nom",
    create_form_prompt:"Commande",
    create_form_surprise:"Surprend moi",
    create_form_surprise_placeholder:"Un gratte-ciel futuriste avec des panneaux publicitaires lumineux",
    create_generate_button:{generate:"Créer l'image",generating:"Création en cours"},
    create_share_button:{share:"Partager avec la communauté",sharing:"Partage en cours"},
    create_indication:"Une fois l'image desirée générée,vous pouvez la partager avec les autres dans la communauté ",
    home_showing_result:"Chargement des resultats pour",
    home_eror:"Aucun résulat trouvé",
    footer_message:"Réalisé avec ❤️ par ",

}
const english = {
  lang:"English",
    home_header:"The communty show case",
    home_title:"Browse trough a collection of imaginative and visually stunning images generated by OpenAI",
    home_search_label:"Search Post",
    home_search_placeholder:"Search post",
    header_button:"Create",
    create_header:"Create",
    create_title:"Create imaginative and visually stunning images through DALL-E and share them with the community",
    create_form_name_name:"Name",
    create_form_prompt:"Prompt",
    create_form_surprise:"Surprise me",
    create_form_surprise_placeholder:"A robot factory with assembly lines",
    create_generate_button:{generate:"Generate image",generating:"Generating"},
    create_share_button:{share:"Share with the community",sharing:"Sharing"},
    create_indication:"One the image generated, you can share it with ",
    home_showing_result:"Loading result for",
    home_eror:"No search result found",
    footer_message:"Made with ❤️ by ",

}
const initialState = {
  value: french,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value= english
    },
    decrement: (state) => {
      state.value = french
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer