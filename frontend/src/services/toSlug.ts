export function toSlug(value: string):string {
  return value.toString().toLowerCase().trim()
	.replace(/\s+/g, '-')
	.replace(/[áàäâã]/g, 'a')
	.replace(/[éèëê]/g, 'e')
	.replace(/[íìîï]/g, 'i')
	.replace(/[óòöôõ]/g, 'o')
	.replace(/[úùüû]/g, 'u')
	.replace(/ñ/g, 'n')
	.replace(/ç/g, 'c')
	.replace(/[^\a-z0-9\-]+/g, '')
	.replace(/\-\-+/g, '-')
}