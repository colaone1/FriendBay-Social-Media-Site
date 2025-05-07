import React from 'react';
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import LikeIcon from './like.png'

class Likes extends React.Component {

  clickHandler(event) {
    console.log(this.props.postId)
    this.props.likeaction(this.props.postId);
  }

  render() {
    return (
      <>
        <Table>
          <tbody>
            <tr>
              <td>
                <Image onClick={() => this.clickHandler()} fluid className="mx-auto" src={LikeIcon} width="25px" alt="like logo" />
              </td>
              <td>
                {this.props.no}
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default Likes;