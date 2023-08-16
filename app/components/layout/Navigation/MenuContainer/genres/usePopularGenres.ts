import { useQuery } from 'react-query'
import { GenreService } from 'sevices/genre.service'
import { IMenuItem } from '../menu.interface'
import { getGenreUrl } from '@/config/url.config'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name,
							}) as IMenuItem
					)
					.slice(0, 4),
		}
	)

	return queryData
}
