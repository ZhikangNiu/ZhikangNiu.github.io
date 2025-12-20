# index.html 使用说明（团队模板）

这份说明面向第一次接手页面的同学，目标是 10 分钟内能改标题、作者、图、音频样例与引用。

## 快速预览

- 本地直开（macOS）：`open index.html`
- 本地直开（Linux）：`xdg-open index.html`
- 推荐方式（相对路径更稳定）：`python3 -m http.server 8000` 后访问 `http://localhost:8000`

## 目录结构

- `index.html`：主页面，所有内容都在这里。
- `css/custom.css`：自定义样式。
- `pics/`：页面图（示意图、曲线图）。
- `audios_n/`：音频样例与对应文本目录（按模型分文件夹）。

命名建议：全部小写 + 连字符（kebab-case），避免空格。

## 最常用修改位置（3 分钟上手）

### 1) 标题与资源链接

在 `index.html` 顶部：
- 标题：`<h3>` 内容
- 资源链接：`.resource-links` 内的 `<a>`，需要图标时按现有写法复制即可

示例（可直接复制一行）：
```html
<span>[<a class="icon-link" href="https://example.com"><i class="fa-regular fa-file-lines link-icon"></i>Paper</a>]</span>
```

Hugging Face 使用官方 SVG：
```html
<span>[<a class="icon-link" href="https://huggingface.co/xxx"><img class="link-icon hf-icon" src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="">Checkpoints</a>]</span>
```

### 2) 作者与单位

作者在 `<h6>`，单位在紧随其后的 `<p>`。修改作者顺序后，别忘了同步 `<sup>` 标号。

### 3) 摘要与目录

摘要在 `<b>Abstract.</b>` 之后的段落；目录在 `<b>Contents</b>` 的列表中。

新增章节时：
1. 在目录里加一行 `<li><a href="#your-id">Your Title</a></li>`
2. 在正文对应标题里加 `id="your-id"`

## 模块说明与替换方式

### Model Overview / Training Steps

直接替换图片文件：
- `pics/overview.png`
- `pics/librispeech_dual_axis.png`

如果换了文件名，请同步修改 `index.html` 的 `<img src="...">`。

### Model Comparison（音频样例）

每个样例由一个标题 + 表格构成。最简单的做法是复制一整块 `<h5>...</h5>` 到 `</table>`，然后替换文本和音频路径。

最小示例（保留 `vertical-align: top` 以对齐音频高度）：
```html
<h5>Text: Your prompt text.</h5>
<div class="table-responsive">
	<table class="table">
		<thead>
			<tr>
				<th style="text-align: center">Prompt Speaker</th>
				<th style="text-align: center">Ground Truth</th>
				<th style="text-align: center">Your Model</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td style="vertical-align: top; text-align: center">
					<audio controls="controls" style="width: 150px;"><source src="audios_n/prompt/xxx.flac" autoplay/>Your browser does not support the audio element.</audio>
					<p></p>
				</td>
				<td style="vertical-align: top; text-align: center">
					<audio controls="controls" style="width: 150px;"><source src="audios_n/gt/xxx.flac" autoplay/>Your browser does not support the audio element.</audio>
					<p>Reference text.</p>
				</td>
				<td style="vertical-align: top; text-align: center">
					<audio controls="controls" style="width: 150px;"><source src="audios_n/your_model/xxx.wav" autoplay/>Your browser does not support the audio element.</audio>
					<p>Generated text.</p>
				</td>
			</tr>
		</tbody>
	</table>
</div>
```

标注缺词/多词（自动高亮缺词）：
```html
<span class="asr-missing">[missing: word]</span>
<span class="asr-extra">extra word</span>
```

## 引用（Citation）

BibTeX 在：
```html
<code id="citation-text">...</code>
```

复制按钮依赖两个 id：
- `copy-citation`（按钮）
- `citation-text`（BibTeX 文本）

如果移动 Citation 区块，保留这两个 id 即可。

## 样式约定

- `index.html` 使用 tab 缩进，保持一致。
- `css/custom.css` 使用 2 空格缩进。
- 新的 class/id 使用 kebab-case（如 `model-overview`）。

## 发布前检查清单

- 页面能在本地打开（推荐用 `http.server`）。
- 图片加载正常、音频可播放。
- 目录跳转正常。
- Citation 复制按钮可用。
- 移动端不会横向溢出（表格在 `.table-responsive` 内）。

如果要加新的大块内容，建议先复制现有模块再改文字与路径，避免破坏结构。
