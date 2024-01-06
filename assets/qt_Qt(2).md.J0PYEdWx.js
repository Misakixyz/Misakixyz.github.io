import{_ as s,o as i,c as t,U as a}from"./chunks/framework.2U_aKNcg.js";const g=JSON.parse('{"title":"Qt6 textEdit遇到的一些问题","description":"记录Qt6中textEdit遇到的问题","frontmatter":{"title":"Qt6 textEdit遇到的一些问题","description":"记录Qt6中textEdit遇到的问题","tags":"Qt","date":"2023-08-27T00:00:00.000Z","outline":[1,2,3]},"headers":[],"relativePath":"qt/Qt(2).md","filePath":"qt/Qt(2).md","lastUpdated":null}'),e={name:"qt/Qt(2).md"},n=a(`<h1 id="关于-qt6-中-textedit-的加粗、斜体、下划线" tabindex="-1">关于 Qt6 中 textEdit 的加粗、斜体、下划线 <a class="header-anchor" href="#关于-qt6-中-textedit-的加粗、斜体、下划线" aria-label="Permalink to &quot;关于 Qt6 中 textEdit 的加粗、斜体、下划线&quot;">​</a></h1><p>给 textEdit、PineTextEdit 添加 clcik(bool check)<br> 注意：同时开启 checkable 状态，就可以直接使用到 check</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 加粗</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ui-&gt;MsgtextEdit-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setFontWeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QFont</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::Bold);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 斜体</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ui-&gt;MsgplainTextEdit-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setFontItalic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(checked);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 下划线</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Qt_Cheat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on_UnderlinepushButton_clicked</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> checked</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ui-&gt;MsgplainTextEdit-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUnderline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(checked);</span></span></code></pre></div>`,3),l=[n];function h(p,k,d,c,E,r){return i(),t("div",null,l)}const _=s(e,[["render",h]]);export{g as __pageData,_ as default};
