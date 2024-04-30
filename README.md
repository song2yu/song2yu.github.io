<img align="right" width="150" alt="logo" src="assets/img/于松松.jpg">

# 于松松

### Master Student @[Dalian University of Technology](https://www.dlut.edu.cn)
### [IIAU Lab](https://futureschool.dlut.edu.cn/IIAU.htm)

Email1:22209083@mail.dlut.edu.cn(primary)

Email2:1195653686@qq.com

Email3:SongsongYu203@163.com



## About Me
<div style="display: flex; align-items: left; justify-content: center;">
    <a href="https://www.dlut.edu.cn" target="_blank" style="margin-right: 20px;">
        <img src="assets/img/dlut.jpg" alt="Dalian University of Technology Logo" style="width: 100px;">
    </a>
    <a href="https://www.sdu.edu.cn" target="_blank">
        <img src="assets/img/sdu.jpg" alt="Shandong University Logo" style="width: 100px;">
    </a>
</div>






## Education

#### Dalian University of Technology, Dalian, China (Sep. 2022 - Now)

Postgraduate student of Engineering in Eletronic Information Engineering

Major Orientation: Depth Estimation and Audio-Visual Video Segmentation

Overall GPA: 4.37/5.0

#### Shandong University, Jinan, China (Sep. 2018 - Jul. 2022)

Bachelor of School of Control Science and Engineering

Overall GPA: 3.87/5.0 (Recommended postgraduate)


## Publications

1. Click *Use this template*, and create your repository on GitHub.
![Step 1](https://user-images.githubusercontent.com/5889006/156916624-20b2a784-f3a9-4718-aa5f-ce2a436b241f.png)

2. Once the repository is created, create a GitHub codespace associated with it.
![Create codespace](https://user-images.githubusercontent.com/5889006/156916672-43b7b6e9-4ffb-4704-b4ba-d5ca40ffcae7.png)

3. And voila! You're ready to go. The codespace has been configured with the latest version of Hugo extended, just run `hugo server` in the terminal and see your new site in action.

4. Check `config` folder for the configuration files. You can edit them to suit your needs. Make sure to update the `baseurl` property in `config/_default/config.toml` to your site's URL.

5. Once you're done editing the site, just commit it and push it. GitHub action will deploy the site automatically to GitHub page associated with the repository.
![GitHub action](https://user-images.githubusercontent.com/5889006/156916881-90b8bb9b-1925-4e60-9d7a-8026cda729bf.png)

---

In case you don't want to use GitHub codespace, you can also run this template in your local machine. **You need to install Git, Go and Hugo extended locally.**

## Update theme manually

Run:

```bash
hugo mod get -u github.com/CaiJimmy/hugo-theme-stack/v3
hugo mod tidy
```

> This starter template has been configured with `v3` version of theme. Due to the limitation of Go module, once the `v4` or up version of theme is released, you need to update the theme manually. (Modifying `config/module.toml` file)

## Deploy to another static page hostings

If you want to build this site using another static page hosting, you need to make sure they have Go installed in the machine. 

<details>
  <summary>Vercel</summary>
  
You need to overwrite build command to install manually Go:

```
amazon-linux-extras install golang1.11 && hugo --gc --minify
```

![](https://user-images.githubusercontent.com/5889006/156917172-01e4d418-3469-4ffb-97e4-a905d28b8424.png)

Make sure also to specify Hugo version in the environment variable `HUGO_VERSION` (Use the latest version of Hugo extended):

![Environment variable](https://user-images.githubusercontent.com/5889006/156917212-afb7c70d-ab85-480f-8288-b15781a462c0.png)
</details>
