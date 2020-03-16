import {POP, SELL, NEW} from "@/common/const";

export const MixinTabConrol= {
    data(){
        return{
            currentType: POP
        }
    },
    methods: {
        tabClick(index){
            switch (index) {
                case 0:
                  this.currentType = POP
                  break
                case 1:
                  this.currentType = NEW
                  break
                case 2:
                  this.currentType = SELL
                  break
              }
            console.log(this.currentType);
        }
    }
}