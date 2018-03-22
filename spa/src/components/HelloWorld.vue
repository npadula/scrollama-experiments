<template>
  <div class="hello">
   <sui-button>
   Test
   </sui-button>
 <sui-grid :stackable="true">
 <sui-grid-row :stretched="true" :style="{marginLeft:'10px', marginRight:'10px'}" :columns="2">
 
 <sui-grid-column>
<sui-segment raised>
  


    <sui-feed>


    <sui-feed-event>
      <sui-feed-label image="static/dvr_logo.jpg" />
      <sui-feed-content>
        <sui-feed-summary>
          Started working at Diveria
       
          <sui-feed-date>Apr 2017</sui-feed-date>
        </sui-feed-summary>

                <sui-feed-extra :style="{maxWidth:'730px'}" :text="true">
               <p> Full stack software development encompassing desktop and web solutions 
                for health services providers and Sharepoint Development.</p>
                <p>
                <sui-label :class="{tag: true}">
                  ASP.NET / Web API
                </sui-label>
                <sui-label :class="{tag: true}">
                  SQL Server
                </sui-label>    
                <sui-label :class="{tag: true}">
                  React / JavaScript
                </sui-label>
                <sui-label :class="{tag: true}">
                  Sharepoint
                </sui-label></p>
              </sui-feed-extra>

      </sui-feed-content>
    </sui-feed-event>


 <sui-feed-event>
      <sui-feed-label image="static/utn_logo.png" />
      <sui-feed-content>
        <sui-feed-summary>
          Worked as a Programming Paradigms TA in UTN-FRSF
       
          <sui-feed-date>Sept 2014 - Sept 2017</sui-feed-date>
        </sui-feed-summary>

                <sui-feed-extra :style="{maxWidth:'730px'}" :text="true">
               <p> Lecturing and grading on 2nd year subject of the Information Systems Engineering degree.
                Also helped organize 2015, 2016 and 2017 editions of the Tecnomate Programming Contest</p>
                <p>
                <sui-label :class="{tag: true}">
                  Smalltalk
                </sui-label>
                <sui-label :class="{tag: true}">
                  LISP
                </sui-label>    
                <sui-label :class="{tag: true}">
                  Prolog
                </sui-label>
                </p>
              </sui-feed-extra>

      </sui-feed-content>
    </sui-feed-event>


     <sui-feed-event>
      <sui-feed-label image="static/conilogo4.jpg" />
      <sui-feed-content>
        <sui-feed-summary>
          Worked as a Research Fellow on INGAR (UTN-CONICET)
       
          <sui-feed-date>Jun 2014 - Dec 2016</sui-feed-date>
        </sui-feed-summary>

                <sui-feed-extra :style="{maxWidth:'730px'}" :text="true">
               <p> Research & Development regarding ontologies and semantic integration and knowledge representation</p>
                <p>
                <sui-label :class="{tag: true}">
                  OWL / SWRL
                </sui-label>
                <sui-label :class="{tag: true}">
                  Stardog
                </sui-label>    
                <sui-label :class="{tag: true}">
                  MongoDB
                </sui-label>
                </p>
              </sui-feed-extra>

      </sui-feed-content>
    </sui-feed-event>

         <sui-feed-event>
      <sui-feed-label><sui-icon :style="{backgroundColor:'gray'}" name="laptop" /> </sui-feed-label>
      <sui-feed-content>
        <sui-feed-summary>
          Worked as a Freelance Developer
       
          <sui-feed-date>Jan 2015 - Feb 2016</sui-feed-date>
        </sui-feed-summary>

                <sui-feed-extra :style="{maxWidth:'730px'}" :text="true">
               <p> Analysis, Design and Development of software solutions for small and middle-sized agricultural companies.</p>
                <p>
                <sui-label :class="{tag: true}">
                  C# .NET
                </sui-label>
                <sui-label :class="{tag: true}">
                  Entity Framework
                </sui-label>    
                <sui-label :class="{tag: true}">
                  Scrum
                </sui-label>
                </p>
              </sui-feed-extra>

      </sui-feed-content>
    </sui-feed-event>




     <sui-feed-event>
      <sui-feed-label image="static/utn_logo.png" />
      <sui-feed-content>
        <sui-feed-summary>
          Started attending to UTN-FRSF
       
          <sui-feed-date>Jan 2011</sui-feed-date>
        </sui-feed-summary>

                <sui-feed-extra :style="{maxWidth:'730px'}" :text="true">
               <p> Information Systems Engineering</p>
              </sui-feed-extra>

      </sui-feed-content>
    </sui-feed-event>

    
  </sui-feed>

  </sui-segment>
 </sui-grid-column>
 
 <sui-grid-column>
 <sui-segment raised>
<sui-card>
        <sui-dimmer-dimmable
          @mouseenter.native="profileCardActive = true"
          @mouseleave.native="profileCardActive = false">
          <sui-image src="static/profile.jpg" />
          <sui-dimmer blurring :active="profileCardActive">
            <sui-button inverted><sui-icon name="mail"/>Contact me</sui-button>
          </sui-dimmer>
        </sui-dimmer-dimmable>
      <sui-card-content>
        <sui-card-header>Nicolas Padula</sui-card-header>
        <sui-card-meta>24 - <sui-icon name="map marker alternate"></sui-icon>Santa Fe, AR</sui-card-meta>
        <sui-card-description>Kristy is an art direcadsfsdfgdfgsdfgdfgdgdgd
        dfgdfgdgdgd
        ghftor living in New York.</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <a href="http://github.com/npadula"><sui-icon name="github" /></a>
        <a href="http://linkedin.com/in/npadula"><sui-icon name="linkedin" /></a>
        <a href="http://nvpadula.wordpress.com"><sui-icon name="wordpress" /></a>
        <a href="mailto:nicolasvpadula@gmail.com"><sui-icon name="mail" /></a>

        </sui-card-content>
    </sui-card>

<span v-tippy="{ html: '#template-1', interactive : true, theme : 'translucent' }">
    Static HTML Template
</span>
  </sui-segment>
 </sui-grid-column>
 </sui-grid-row>
 </sui-grid>


<div id="template-1" class="hidden">
    <div class="max-w-md w-full">
        <div class="m-2">
            <div class="text-black font-bold text-xl">
                Can coffee make you a better developer?
            </div>
            <p class="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
            </p>
        </div>
    </div>
</div>    
  </div>

</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      profileCardActive: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hidden {
  display: none;
}




.ui.active.dimmer {
  opacity:0.7;
      transition: opacity 5.5s cubic-bezier(0, 0, 0, 0.64);

}

.ui.dimmer {
  opacity:0.7;
      transition: opacity 5.5s cubic-bezier(0, 0, 0, 0.64);

}
</style>
