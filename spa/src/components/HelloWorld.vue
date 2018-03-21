<template>
  <div class="hello">
   <sui-button>
   Test
   </sui-button>
 <sui-grid :columns="2" >
 <sui-grid-column :style="{marginLeft: '10px'}">
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
       
          <sui-feed-date>Sept 2014 - Sept 2017</sui-feed-date>
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

      <sui-feed-label image="static/helen.jpg" />
      <sui-feed-content>
        <sui-feed-summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
          <sui-feed-date>4 days ago</sui-feed-date>
        </sui-feed-summary>
        <sui-feed-extra :images="true">
          <a><img src="static/images/wireframes/image.png" ></a>
          <a><img src="static/images/wireframes/image.png" ></a>
        </sui-feed-extra>
        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            1 Like
          </sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/jenny.jpg" />
      <sui-feed-content>
        <sui-feed-summary date="2 Days Ago" user="Jenny Hess" content=" add you as a friend" />
        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            8 Likes
          </sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/joe.jpg" />
      <sui-feed-content>
        <sui-feed-summary>
          <a>Joe Henderson</a> posted on his page
          <sui-feed-date>3 days ago</sui-feed-date>
        </sui-feed-summary>


        <sui-feed-extra :text="true">
          Ours is a life of constant reruns. We're always circling back to where we'd we started,
          then starting all over again. Even if we don't run extra laps that day, we surely will
          come back for more of the same another day soon.
        </sui-feed-extra>


        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            5 Likes
          </sui-feed-like>
        </sui-feed-meta>

      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/justen.jpg" />
      <sui-feed-content>
        <sui-feed-summary>
          <a>Justen Kitsune</a> added <a>2 new photos</a> of you
          <sui-feed-date>4 days ago</sui-feed-date>
        </sui-feed-summary>
        <sui-feed-extra :images="true">
          <a><img src="static/images/wireframes/image.png" ></a>
          <a><img src="static/images/wireframes/image.png" ></a>
        </sui-feed-extra>
        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            41 Likes
          </sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>

  </sui-segment>
 </sui-grid-column>
 
 
 </sui-grid>
 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
