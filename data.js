window.BLOG_DATA = {
    // === 1. 个人简介 (Profile) ===
    profile: {
        name: "Songsong Yu -- 于松松",
        title: "Ph.D. Student @ SJTU | Intern @ Tencent ARC Lab",
        // 您的个人简介，支持 Markdown 风格的换行
        bio: `I am currently a Ph.D. student at the School of Artificial Intelligence, Shanghai Jiao Tong University.
        
        My research focuses on <strong>multimodal models</strong> and <strong>spatial intelligence</strong>. I also have a keen interest in <strong>generation models</strong>.
        
        Previously, I obtained my Master's degree from Dalian University of Technology, supervised by Prof.<a href="https://scholar.google.com/citations?user=D3nE0agAAAAJ&hl=zh-CN&oi=ao" target="_blank" class="sjtu-link underline">Huchuan Lu</a> 
        and Prof. <a href="https://scholar.google.com/citations?user=EfTwkXMolscC&hl=zh-CN&oi=ao" target="_blank" class="sjtu-link underline">Lijun Wang</a>.`,
        
        // 您的头像文件名 (请确保 yusongsong.png 在同一文件夹下，否则会显示默认头像)
        avatar: "fig/yusongsong.png", 
        
        // 社交链接
        socials: [
            { name: "GitHub", url: "https://github.com/song2yu", icon: "github" },
            { name: "Email", url: "songsongyu203@163.com", icon: "mail" },
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
            company: "Tencent PCG, ARC LAB",
            period: "2024.7-Present",
            desc: "Focusing on spatial intelligence and generative models."
        }
    ],

    // === 4. 发表论文 (Publications) ===
    papers: [
        {
            title: "How Far are VLMs from Visual Spatial Intelligence? A Benchmark-Driven Perspective",
            authors: "Songsong Yu, Yuxin Chen, Hao Ju, et al.",
            conference: "Arxiv Pre-print, 2025",
            abstract: "This paper provides a detailed survey of the methods and task settings in spatial reasoning, and offers a complete dataset for evaluation.",
            image:"fig/radar2.6_calibri.png",
            links: [
                { name: "PDF", url: "https://arxiv.org/pdf/2509.18905", icon: "file-text" },
                { name: "Code", url: "https://github.com/song2yu/SIBench-VSR", icon: "github" },
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
                { name: "Code", url: "https://github.com/song2yu/Mono2Stereo", icon: "github" }
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
                { name: "Code", url: "https://github.com/YUsong360/DME-Unveilingthe-bias", icon: "github" }
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
                { name: "Code", url: "https://github.com/Cyyzpoi/SelM", icon: "github" }
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
------------------------------------------- 这是一条分割线-------------------------------------------------
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
            <strong>《山海经·海外北经》夸父与日逐走，入日；渴，欲得饮，饮于河、渭；河、渭不足，北饮大泽。未至，道渴而死。弃其杖，化为邓林。</strong><br><br>

            再读到夸父逐日，我被这样一个浪漫的古典叙事打动了。经过查阅，不同典籍对结局描写颇为相似，除山海经外，《列子·汤问》中记载"未至，道渴而死。弃其杖，尸膏肉所浸，生邓林。邓林弥广数千里焉。" 这两处关于“杖”的描写颇为有趣，有趣之处在于..., 后面会讲到原因。

            首先我想从农耕文明中历法的重要性讲起，试想我们置身于刀耕火种的时代，到底何时播种，何时浇水，何时收获？有没有一套参考依据呢？以我们现代的经验来看，应当是依照二十四节气。惊蛰冻土化解，春分开始播种，小满则给麦子浇水，芒种则是抢收麦子并且种下新的稻黍等等，因而民间也会有各种谚语，比如“小满不满，芒种不管（绝收）”，“霜降杀百草”等。如果错过谷物播种时间，或者错过浇水的最佳时间（如麦子灌浆），粮食收成下降，引来的是最直接的生存挑战。因此，历法的准确性之于农耕文明是极其重要的。

            春生夏长，秋收冬藏。那么古人如何测绘的这些自然规律呢？一年有多少天，一个月有多少天，又该什么时候补充闰月？当然，从西方的哲学来看，他们的模型是天体运行，实打实看到绕了一圈，确定下来年月日的概念（这里应该单独论述一篇木火，金水对东西方文化，思想，审美的影响）。但是我们的先民有自己的思路，那就是取象。
            
            下面的故事权当一乐，未经考究，道听途说。
            
            <img 
                src="fig/fuxi.png" 
                style="width: 300px; height: 400px; display: block; margin: 24px auto;" 
                class="rounded-lg shadow-md"
            />                                                                                            
            <span class="block text-center text-gray-500 text-sm">（图：古人利用圭表测影定节气）</span>
            
            相传先祖伏羲持圆规，矩尺，通过圭表测影的方式发现一年大约是360多天，为计数方便，并取为360这样一个整数。其中，“规”这样一个测量仪器用于测量太阳运行的轨迹，也就是黄道，而“矩”则是用来测量日影的长短。古人的宇宙观认为天圆地方，因而也有了“不以规矩，不成方圆”的说法
            
            --------------12.7
            `
            
            

        }
    ]
};
