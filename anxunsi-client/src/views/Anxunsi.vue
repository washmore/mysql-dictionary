<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8 site article-list">
                    <div class="row article" v-for="item in 20">
                        <h2 class="row article-title">
                            <a rel="bookmark"
                               :href="'/article/'+item">
                                睡排序--利用线程sleep的时间排序
                            </a>
                        </h2>
                        <div class="row article-tags">
                           <span v-for="tag in 4"> <a rel="tag" :href="'/tags/'+tag">
                               {{tag===1?'排序':(tag===2?'算法':(tag===3?'Java':'大佬'))}}</a><span v-if="tag < 4">,</span></span>
                        </div>
                        <div class="row article-date">
                            November 28, 2017
                        </div>
                        <div class="row article-content">
                            <div class="col-sm-12" style="text-align: left">
                                <p>本文讲的是睡排序--利用线程sleep的时间排序</p>
                                <pre>
class Demo {
    public static void main(String[] args) {
        int[] sortNum = {-1, 0, 1, 4, 7, 3, 8, 9, 2, 6, 5, 555};
        SortThread[] sortThreads = new SortThread[sortNum.length];
        for (int i = 0; i < sortThreads.length; i++) { //接收数字充当休眠时间
            sortThreads[i] = new SortThread(sortNum[i]);
        }
        for (int i = 0; i < sortThreads.length; i++) {
            sortThreads[i].start();
        }
    }

}

class SortThread extends Thread {
    int num = 0;

    public SortThread(int num) {
        this.num = num;
    }

    public void run() {
        try {
            sleep(num);
        } catch (InterruptedException e) {

            e.printStackTrace();
        }
        System.out.println(num);
    }
}
                                </pre>
                            </div>
                        </div>
                    </div>

                    <!--<div class="row">-->
                    <!--<div class="col-sm-2"></div>-->

                    <!--<div class="col-sm-4">-->
                    <!--</div>-->

                    <!--<div class="col-sm-4 text-right">-->
                    <!--<a class="btn btn-success" href="https://blog.washmoretech.com:443/2">Older</a>-->
                    <!--</div>-->

                    <!--<div class="col-sm-2"></div>-->
                    <!--</div>-->
                </div>
                <div class="col-sm-2"></div>
            </div>
        </div>

        <div class="footer">
            &copy; 2018 - <a href="https://www.anxunsi.net">俺寻思</a>这行代码能行...
            Powered by Vue.js && egg
            <div>
                Theme <a rel="friend" href="https://github.com/b3log/solo-skins" target="_blank">Bruce</a>
                by
                <a rel="friend" href="http://88250.b3log.org" target="_blank">88250</a>
            </div>
            <div><em>All rights reserved.</em></div>
        </div>

    </div>
</template>
<script>
    import '@/assets/css/bootstrap.css';
    import '@/assets/css/Bruce.css';
    export default {
        name: "anxunsi",
    }
</script>
<style scoped>
</style>