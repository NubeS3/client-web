import withLoading from '../../HOC/withLoading';

const BucketFileTable = ({
  items,
  handleItemCheckboxClick,
  handleOnBucketItemClick,
  isSelected
}) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {items
        ? items?.map((item) => {
            const isItemSelected = isSelected(item?.id);
            const labelId = `enhanced-table-checkbox-${item.id}`;
            return (
              <tr key={item?.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    aria-labelledby={labelId}
                    type="checkbox"
                    checked={isItemSelected}
                    onChange={(e) => handleItemCheckboxClick(e, item)}
                  />
                </td>
                <td>
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={
                        item?.type === 'file'
                          ? 'https://tree-ams5-0000.backblaze.com/pics/b2-browse-icon-file.png'
                          : 'https://tree-ams5-0000.backblaze.com/pics/b2-browse-icon-folder.png'
                      }
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        <a
                          className="text-blue-500 hover:underline"
                          onClick={() => handleOnBucketItemClick(item)}
                        >
                          {item?.name}
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {item.metadata ? (
                      <>
                        {item?.metadata?.size ? (
                          item?.metadata?.size < 1024 ? (
                            <>{item?.metadata?.size} byte</>
                          ) : (
                            <>
                              {item.metadata.size < Math.pow(1024, 2) ? (
                                <>{Math.ceil(item?.metadata?.size / 1024)} KB</>
                              ) : (
                                <>
                                  {Math.ceil(
                                    item?.metadata?.size / Math.pow(1024, 2)
                                  )}{' '}
                                  MB
                                </>
                              )}
                            </>
                          )
                        ) : (
                          ''
                        )}
                      </>
                    ) : null}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {item.metadata ? item?.metadata?.upload_date : null}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href="#"
                    className="text-sm text-gray-900 hover:bg-blue-50"
                  >
                    <img
                      src="https://tree-ams5-0000.backblaze.com/pics/b2-info-icon.png"
                      className="w-5 h-5"
                    />
                  </a>
                </td>
              </tr>
            );
          })
        : null}
    </tbody>
  );
};

export default withLoading(BucketFileTable);
