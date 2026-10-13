// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://geo.wz.io',
	integrations: [
		starlight({
			title: 'OpenGEO',
			// 中文为主，后续加英文：locales 里再加 en: { label: 'English', lang: 'en' }
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/315fang/OpenGEO' }],
			// Microsoft Clarity 统计:拿到 project ID 后取消注释并替换占位符
			// head: [
			// 	{
			// 		tag: 'script',
			// 		content: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "CLARITY_PROJECT_ID");`,
			// 	},
			// ],
			sidebar: [
				{
					label: '指南',
					items: [
						{ label: '什么是 GEO', slug: 'guides/what-is-geo' },
						{ label: '快速开始', slug: 'guides/getting-started' },
					],
				},
				{
					label: '参考',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
