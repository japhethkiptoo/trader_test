import { Injectable } from '@nestjs/common';
import { PaginatedResponse } from 'src/interfaces/pagination.interface';

/**
 * Pagination utility
 * - to get pagination options
 * - to transform paginated data
 */

@Injectable()
export class PaginationUtility {
  getPaginationOptions(page: number, limit: number) {
    const skip = (page - 1) * limit;
    return { limit, offset: skip };
  }

  //return paginated data
  paginate<T>(
    data: T[],
    total: number,
    page: number = 1,
    limit: number = 1,
  ): PaginatedResponse<T> {
    // calculate total pages
    const total_pages = Math.ceil(total / limit);
    return {
      data,
      total,
      page,
      limit,
      total_pages,
    };
  }
}
