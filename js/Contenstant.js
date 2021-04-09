class Contestant {

    constructor(){

        this.name=null;
        this.answer=0;
        this.index=null;

    }


    getCount(){

        var ContestantCountref= database.ref('contestantCount');
     ContestantCountref.on("value",(data)=>{ 

        contestantCount = data.val();

      })


    }

    updateCount(count){

        database.ref('/').update({

            contestantCount:count

        })
    }

    update(){

        var contestantIndex="contestants/contestant"+this.index;
        database.ref(contestantIndex).set({

            name:this.name,
            answer:this.answer

        })

    }

    static getplayerInfo(){

        var ContestantInforef = database.ref('contestants');
        ContestantInforef.on("value",(data)=>{

            allContestant=data.val();

        })

    }
}