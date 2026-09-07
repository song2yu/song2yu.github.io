window.BLOG_DATA = {
    // ╔══════════════════════════════════════════════════════════════╗
    // ║  Shortcode 命令参考 (可在 content / heading / bio 等文本字段中使用)  ║
    // ╠══════════════════════════════════════════════════════════════╣
    // ║  {{h1: 文字}}      → 一级标题 (大号加粗)                        ║
    // ║  {{h2: 文字}}      → 二级标题 (中号加粗)                        ║
    // ║  {{h3: 文字}}      → 三级标题 (小号加粗)                        ║
    // ║  {{b: 文字}}       → 加粗                                    ║
    // ║  {{i: 文字}}       → 斜体                                    ║
    // ║  {{quote: 文字}}   → 引用块 (左侧竖线 + 缩进)                  ║
    // ║  {{center: 文字}}  → 居中文字                                 ║
    // ║  {{divider}}       → 分割线                                   ║
    // ║  {{img: 路径}}     → 居中图片 (自动圆角+阴影)                   ║
    // ║  {{caption: 文字}} → 图片说明 (灰色小字居中)                   ║
    // ╚══════════════════════════════════════════════════════════════╝
    //
    // 示例: content: `{{h1: 我来问道无余说}}，云在青天水在瓶。`
    //       heading: "{{h2: 我来问道无余说，云在青天水在瓶。}}"
    // heading 可填写普通文本或标题命令，页面不会生成嵌套标题。

    // === 1. 个人简介 (Profile) ===
    profile: {
        name: "Songsong Yu -- 于松松",
        // heading: "我来问道无余说，云在青天水在瓶。",
        title: "Ph.D. Student @ SJTU | Intern @ Joy Future Academy",
        // 您的个人简介，支持 Markdown 风格的换行
        bio: `I am currently a Ph.D. student at the School of Artificial Intelligence, Shanghai Jiao Tong University, supervised by Prof. <a href="https://yanwei-li.com/" target="_blank" class="sjtu-link underline">Yanwei Li</a>.
        
        My research focuses on {{b: multimodal models}} and {{b: spatial intelligence}}. I also have a keen interest in {{b: generation models}}.
        
        Previously, I obtained my Master's degree from Dalian University of Technology, supervised by Prof.<a href="https://scholar.google.com/citations?user=D3nE0agAAAAJ&hl=zh-CN&oi=ao" target="_blank" class="sjtu-link underline">Huchuan Lu</a> 
        and Prof. <a href="https://scholar.google.com/citations?user=EfTwkXMolscC&hl=zh-CN&oi=ao" target="_blank" class="sjtu-link underline">Lijun Wang</a>.`,
        
        // 您的头像文件名 (请确保 yusongsong.png 在同一文件夹下，否则会显示默认头像)
        avatar: "fig/yusongsong.png", 
        
        // 社交链接
        socials: [
            { name: "GitHub", url: "https://github.com/song2yu", icon: "fig/github.svg" },
            { name: "Email", url: "songsongyu203@163.com", icon: "mail" },
            { name: "X", url: "https://x.com/brucesong2yu", icon: "fig/x.svg" },
            { name: "CSDN", url: "https://blog.csdn.net/weixin_46257458?type=blog", icon: "fig/csdn.png" }, 
            // { name: "RedNote", url: "link_xiaohongshu.png", icon: "xiaohongshu_red.png" } // 使用通用图标代替
        ]
    },

    // === 2. 教育背景 (Education) ===
    education: [
        {
            degree: "PhD in Artificial Intelligence",
            school: "Shanghai Jiao Tong University",
            period: "Sep 2025 - Present",
            desc: "Thesis: \"How Far are VLMs from Visual Spatial Intelligence? A Benchmark-Driven Perspective\""
        },
        {
            degree: "MSc in Info & Comm Engineering",
            school: "Dalian University of Technology",
            period: "Sep 2022 - Jun 2025",
            desc: `GPA: 3.89/4.0. Supervised by Prof. Huchuan Lu and Prof. Lijun Wang.<br>`
        },
    ],

    // === 3. 工作/实习经历 (Experience) ===
    experience: [
        {
            role: "Research Intern",
            company: "JD, Joy Future Academy",
            period: "2026.6-Now",
            desc: "Focusing on world action model."
        },
        {
            role: "Research Intern",
            company: "Tencent PCG, ARC LAB",
            period: "2024.7-2026.5",
            desc: `Focusing on spatial intelligence and generative models, supervised by Dr. <a href="https://xxx.com" target="_blank" class="text-indigo-600 underline">Yuxin Chen</a>.`
        }
    ],

    // === 4. 发表论文 (Publications) ===
    papers: [
        {
            title: "ZimaBlue: Evolving Generalizable World Action Models through Scalable Video Pre-training",
            authors: "Xionghao Wu, Yijun Yang, Shiyang Zhou, Haoze Sun, Jianhui Liu, Songsong Yu, Jiyao Zhang, Wenbo Li",
            conference: "Tech Report, 2026",
            abstract: "ZimaBlue learns generalizable world action models from large-scale egocentric video via a three-stage curriculum and a slow-fast architecture, substantially improving zero-shot robotic manipulation.",
            image: "fig/ZimaBlue.png",
            links: [
                { name: "PDF", url: "https://arxiv.org/pdf/2609.00188", icon: "file-text" },
                { name: "Code", url: "https://github.com/ZimaBlue-WAM/ZimaBlue", icon: "fig/github.svg" },
                { name: "Homepage", url: "https://zimablue-wam.github.io/", icon: "globe" }
            ]
        },
        {
            title: "Semantic Generative Tuning for Unified Multimodal Models",
            authors: "Songsong Yu, Yuxin Chen, Ying Shan, Yanwei Li.",
            conference: "ECCV, 2026",
            abstract: "Proposes Semantic Generative Tuning (SGT), which adopts image segmentation as a generative post-training objective to bridge visual understanding and generation at the semantic level, yielding consistent gains on BAGEL and OmniGen2 across CV-Bench and GenEval.",
            image: "fig/sgt.png",
            links: [
                { name: "PDF", url: "https://arxiv.org/pdf/2605.18714", icon: "file-text" },
                { name: "Code", url: "https://github.com/song2yu/SGT", icon: "fig/github.svg" },
                { name: "Homepage", url: "https://song2yu.github.io/SGT/", icon: "globe" }
            ]
        },
        {
            title: "How Far are VLMs from Visual Spatial Intelligence? A Benchmark-Driven Perspective",
            authors: "Songsong Yu, Yuxin Chen, Hao Ju, et al.",
            conference: "Arxiv Pre-print, 2025",
            abstract: "This paper provides a detailed survey of the methods and task settings in spatial reasoning, and offers a complete dataset for evaluation.",
            image:"fig/radar2.6_calibri.png",
            links: [
                { name: "PDF", url: "https://arxiv.org/pdf/2509.18905", icon: "file-text" },
                { name: "Code", url: "https://github.com/song2yu/SIBench-VSR", icon: "fig/github.svg" },
                { name: "Leaderboard", url: "https://sibench.github.io/Awesome-Visual-Spatial-Reasoning/", icon: "trophy" },
                { name: "Awesome-List", url: "https://github.com/SIBench/Awesome-Visual-Spatial-Reasoning", icon: "star" }
            ]
        },
        {
            title: "Mono2Stereo: A Benchmark and Empirical Study for Stereo Conversion",
            authors: "Songsong Yu, Yuxin Chen, Zeke Xie, et al.",
            conference: "CVPR, 2025",
            abstract: "Introduces a latent space alignment strategy to prevent the model from getting trapped in local minima, and presents SIoU to measure stereo image quality.",
            image:"",
            links: [
                { name: "PDF", url: "https://arxiv.org/pdf/2503.22262", icon: "file-text" },
                { name: "Homepage", url: "https://mono2stereo-bench.github.io/", icon: "globe" },
                { name: "Code", url: "https://github.com/song2yu/Mono2Stereo", icon: "fig/github.svg" }
            ]
        },
        {
            title: "DME: Unveiling the Bias for Better Generalized Monocular Depth Estimation",
            authors: "Songsong Yu, Yifan Wang, Yunzhi Zhuge, et al.",
            conference: "AAAI, 2024",
            abstract: "Tackles the long-tail distribution problem in depth estimation by assigning a specialized expert model to each depth interval.",
            image:"",
            links: [
                { name: "PDF", url: "https://ojs.aaai.org/index.php/AAAI/article/view/28506", icon: "file-text" },
                { name: "Code", url: "https://github.com/YUsong360/DME-Unveilingthe-bias", icon: "fig/github.svg" }
            ]
        },
        {
            title: "SelM: Selective Mechanism based Audio-Visual Segmentation",
            authors: "Jiajun Li†, Songsong Yu†, et al.",
            conference: "ACM MM, 2024 (Oral)",
            abstract: "Leverages Mamba's selective mechanism to inhibit noise in audiovisual segmentation, attaining a favorable accuracy rate.",
            image:"",
            links: [
                { name: "PDF", url: "https://dl.acm.org/doi/pdf/10.1145/3664647.3680926", icon: "file-text" },
                { name: "Code", url: "https://github.com/Cyyzpoi/SelM", icon: "fig/github.svg" }
            ]
        },
        {
            title: "Multi-View Depth Completion with Coarse-to-Fine Networks",
            authors: "Songsong Yu†, Haiting Wang†, et al.",
            conference: "Under Review",
            abstract: "Introduces a two-stage coarse-to-fine strategy and utilizes multi-view images to accomplish the depth completion task.",
            image:"",
            links: [
                { name: "PDF", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4732434", icon: "file-text" }
            ]
        }
    ],

    // === 5. 兴趣爱好 (Interests) ===
    // 这些名字(name)会对应 index.html 里的背景图配置
    interests: [
        { name: "Photography", icon: "camera" },
        { name: "Hiking", icon: "mountain" },
        { name: "Reading", icon: "book" },
        { name: "Guitar", icon: "music" }, 
        { name: "Food Tasting", icon: "coffee" }
    ],

    // === 6. 个人笔记 (Notes - 您可以随时在这里添加新笔记) ===
    notes: [
        {
            id: 1,
            title: "无何有之乡",
            date: "2025-11-25",
            image: "fig/mengdie.png",
            content: `
想了很久不知从何说起，大概是想构建一个角落，像小波的《我的精神家园》，或者是韩寒的《我所理解的生活》。或许渐渐地就能越写越流畅，总之要先开始。
<br>尽量不说虚妄语，不使文艺腔；尽量不做冷眼看客，不做避世高人；真刀真枪，硬桥硬马；
                <br><br>
{{divider}}
【原文】 “今子有大树，患其无用，何不树之于无何有之乡，广莫之野，彷徨乎无为其侧，逍遥乎寝卧其下。不夭斤斧，物无害者，无所可用，安所困苦哉！” 《庄子·内篇·逍遥游》<br>
【译文】 “现在你有一棵大树，你愁它没有用处，为什么不把它种在‘什么都没有’的虚静之乡，那广阔无边的旷野里呢？ 你可以无所事事地在树旁徘徊，自由自在地在树下躺着睡觉。 这样，它就不会遭受到斧头的砍伐，也没有什么东西会来伤害它。 正因为它没有什么（世俗的）用处，又哪里会有什么困苦和灾祸呢！”
            `
        },
        {
            id: 2,
            title: "从夸父逐日窥见历法",
            date: "2025-11-30",
            image: "", // 没有图片留空
            content: `
            {{b: 《山海经·海外北经》夸父与日逐走，入日；渴，欲得饮，饮于河、渭；河、渭不足，北饮大泽。未至，道渴而死。弃其杖，化为邓林。}}<br><br>

            再读到夸父逐日，我被这样一个浪漫的古典叙事打动了。经过查阅，不同典籍对结局描写颇为相似，除山海经外，《列子·汤问》中记载"未至，道渴而死。弃其杖，尸膏肉所浸，生邓林。邓林弥广数千里焉。" 这两处关于“杖”的描写颇为有趣，有趣之处在于..., 后面会讲到原因。

            首先我想从农耕文明中历法的重要性讲起，试想我们置身于刀耕火种的时代，到底何时播种，何时浇水，何时收获？有没有一套参考依据呢？以我们现代的经验来看，应当是依照二十四节气。惊蛰冻土化解，春分开始播种，小满则给麦子浇水，芒种则是抢收麦子并且种下新的稻黍等等，因而民间也会有各种谚语，比如“小满不满，芒种不管（绝收）”，“霜降杀百草”等。如果错过谷物播种时间，或者错过浇水的最佳时间（如麦子灌浆），粮食收成下降，引来的是最直接的生存挑战。因此，历法的准确性之于农耕文明是极其重要的。

            春生夏长，秋收冬藏。那么古人如何测绘的这些自然规律呢？一年有多少天，一个月有多少天，又该什么时候补充闰月？当然，从西方的哲学来看，他们的模型是天体运行，实打实看到绕了一圈，确定下来年月日的概念（这里应该单独论述一篇木火，金水对东西方文化，思想，审美的影响）。但是我们的先民有自己的思路，那就是取象。
            
            下面的故事权当一乐，未经考究，道听途说。
            
            {{img: fig/fuxi.png}}
            {{caption: （图：古人利用圭表测影定节气）}}
            
            相传先祖伏羲持圆规，矩尺，通过圭表测影的方式发现一年大约是360多天，为计数方便，并取为360这样一个整数。其中，“规”这样一个测量仪器用于测量太阳运行的轨迹，也就是黄道，而“矩”则是用来测量日影的长短。古人的宇宙观认为天圆地方，因而也有了“不以规矩，不成方圆”的说法
            
            {{divider}}

            时间略久。来补全一下。

            女娲补天。当时人们测定的历法的方式就是对太阳以及月亮的观测，由于观测工具较为落后，随着时间流逝，误差逐渐累积，导致历法的准确性逐渐下降。我们已无从知晓女娲补天的真实经过，但是如今一个比较合理的解释是更新和补全历法，在规定的时间里增加闰月，以保证历法的准确性。

            对于这样的叙事我其实有一些私心，我会觉得中国古代先贤其实是跨时代领先的。比如历法，西方是没有农历这样一个概念的。一个常识是，月亮每逢农历十五就会圆满一次。
            中国古代先人为什么要专门卡这样一个周期呢，如果阳历讲的是太阳的周期律，那么阴历（农历）就是讲的月亮的周期律。其实有一个非常实际的原因，还是回归到农业生产，沿海沿江的地区，人们需要提前预知潮汐的涨落，以便安排捕鱼等活动。我们现代科学会认为，潮汐的涨落是由月亮的引力引起的，但是古代先人并不知道这个原因，他们只是观察到月亮的周期性变化与潮汐的涨落之间存在某种联系，于是便将这个周期性变化与潮汐的涨落联系起来，从而形成了农历。
            类似的证据还有很多，这里不再赘述。
            可能有点偏题，但是这也是我为什么喜欢中国古代文化的原因之一。那么多的古典神话，其实说的都是先人在自然中的共生智慧。我们讨论了各种关系，儒家讨论人和社会的关系，道家讨论人与自然的关系，佛家讨论人与自我的关系，因此也有言称‘儒为表，道为骨，佛为心’。
            
            最初小学阶段对儒家和道家的阅读较多，但也是泛泛了解。儒家讲的是约束外在操行，克己复礼，曾经我以为的儒家是一门成君子的学问，但后来惊觉这个理解是片面的。尤其是从我的父母身上发觉了这一局限性，他们从物质贫乏的年代生活至今，很多事都求一个问心无愧，遵循所谓的礼节；与此相对的，是一些不怎么讲求严格礼节的父母，他们仍然能够经营好家庭关系，在繁琐的世事中游刃有余。
            于是我理解了礼最本质的东西是‘爱’，爱人，爱自己。‘己所不欲勿施于人’说的是同理心，是爱人的表现，所谓仁者爱人也是这个意思。关于道家，最初还是受庄子影响较多，因为对于年少的我来说，一个个有趣的小典故更能让我沉浸其中。庄子在我心中的关键词是，自由，逍遥，睿智。但时至今日，我仍然不得其真意，到底怎么才能不使心役于外物呢？我想这对我来说可能是一生的修行。
            对于佛教的热爱，还是到了大学开始的。好像这么说也算不得确切，因此从小家里有供奉菩萨，也算耳濡目染。只不过从大学到硕士阶段，才开始阅读佛教的一些书籍。印象最深的仍然是六祖慧能，以及大家所熟知的慧能和神秀的两段偈子。初读时候觉得不过抖机灵的诡辩，但后面随着对《金刚经》和《坛经》的了解，才发现这是两种完全不同的修行路径和法门。
            ‘时时勤拂拭’说的没错，‘本来无一物’说的也没错，这是两个不同的阶段。所谓‘色即是空’说的是不要痴迷于外物的得，而‘空即是色’说的就是逼迫自己不要痴迷，这件事本身也是一种心外之迷失。
            
            {{divider}}
            `
        },
        {
            id: 3,
            title: "歌未竟，东方白",
            date: "2026-9-3",
            image: "fig/jinian.jpg",
            content: `
            致敬旧体诗的新高峰，新中国的伟大缔造者。
            `
        },
        // {
        //     id: 4,
        //     title: "云在青霄水在瓶",
        //     date: "2026-9-6",
        //     image: "fig/jinian.jpg",
        //     content: `
        //     {{h2:我来问道无余说，云在青天水在瓶。}}
        //     二四年十一月中旬，由于地势原因，五台山已经早早入了冷冬。此前持斋一周，闻经数回，候补北京到五台的车票，在周五的清晨收到消息购票成功了，于是当晚动身前往。
        //     车厢还算安静，很快就睡着了。梦里见到了文殊菩萨，是一个鹤发童颜，师父形象（文殊菩萨是七佛之师），没有任何对话，只是平静的望着我。醒来时有感动，没想到这次会是这种形式见面。

        //     {{h2: 他教我收余恨，休恋逝水，苦海回身，早悟兰因。}}
        //     从火车站到五台山上需要乘大巴，巧合的是有一个同行大姐，在火车上在我对面的卧铺，大巴上再次遇到，简单攀谈后我们决定结伴同行。这个季节的山上已经冷的彻骨，背阴面处尚有积雪。当天具体的线路已经模糊了，只记得上午先去了五爷庙，戏台和印象中无二，香客依然来来往往，虔诚合十，磕头，口中念念有词。
            
        //     我在五爷庙对着戏台出神许久。

        //     从菩萨顶下来后，最后一站我们来到一家小饭馆。
        //     `
        // },
    ]
};
